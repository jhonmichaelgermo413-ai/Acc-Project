import { usePage } from '@inertiajs/react';

export default function AppLogo() {
    return (
        <>
            {/* ACC LOGO */}
            <div className="flex aspect-square size-10 items-center justify-center">
                <img
                    src="/ACC-logo.png"
                    alt="Abuyog Community College Logo"
                    className="size-10 object-contain"
                />
            </div>

            {/* BRAND NAME */}
            <div className="ml-2 grid flex-1 text-left text-sm">
                <span className="truncate leading-tight font-semibold">
                    Abuyog Community College
                </span>
            </div>
        </>
    );
}