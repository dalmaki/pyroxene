import React from "react";

export function Position() {
    React.useEffect(() => {
        const pos = document.getElementById("DebugMousePos");
        const updatePos = (e: MouseEvent) => {
            if (pos) {
                pos.innerText = `MPos: (${e.clientX}, ${e.clientY})`;
            }
        }
        document.addEventListener("mousemove", updatePos);
        
        return () => {
            document.removeEventListener("mousemove", updatePos);
        }
    })
}

function setKey(className: string, state: boolean) {
    const keyElement = document.querySelector(`.${className}`);
    if (keyElement) {
        if (state) {
            keyElement.classList.remove("off");
            keyElement.classList.add("on");
        } else {
            keyElement.classList.remove("on");
            keyElement.classList.add("off");
        }
    }
}

export function Input() {
    React.useEffect(() => {
        const input = document.getElementById("DebugMouseInput");
        const mouseDown = (e: MouseEvent) => {
            if (input) {
                e.buttons & 1 && setKey("InputL", true);
                e.buttons & 4 && setKey("InputM", true);
                e.buttons & 2 && setKey("InputR", true);
            }
        }
        document.addEventListener("mousedown", mouseDown);

        const mouseUp = (e: MouseEvent) => {
            if (input) {
                e.buttons & 1 || setKey("InputL", false);
                e.buttons & 4 || setKey("InputM", false);
                e.buttons & 2 || setKey("InputR", false);
            }
        }
        document.addEventListener("mouseup", mouseUp);

        return () => {
            document.removeEventListener("mousedown", mouseDown);
            document.removeEventListener("mouseup", mouseUp);
        };
    });
}