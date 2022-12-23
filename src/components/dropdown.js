import React from "react";

export default function DropdownComponent() {
    return (
        <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Logitech Webcam 1080p</option>
                <option>Logitech Webcam 2160p</option>
                <option>Sony Model D 1080p</option>
                <option>Microsoft LifeCam</option>
            </select>
        </div>
    );
}