import React from "react";
import * as Mouse from "./Mouse"
import joinClassName from "../util/joinClassname";
import "./Debug.css";

type Color = "red" | "blue" | "green" | "white";

const Key = React.forwardRef((
    {className, ...props}: React.ComponentPropsWithoutRef<"span">,
    ref: React.Ref<HTMLSpanElement>
    ) => (
    <span className={joinClassName(className, "DebugKey", "off")} ref={ref} {...props}/>
    )
);

const Column = React.forwardRef((
    {className, ...props}: React.ComponentPropsWithoutRef<"div">,
    ref: React.Ref<HTMLDivElement>
    ) => (
    <div className={joinClassName(className, "DebugColumn")} ref={ref} {...props}/>
    )
);
Column.displayName = "Debug.Column";

const Section = React.forwardRef((
    {className, color, ...props}: {color?: Color} & React.ComponentPropsWithoutRef<"div">,
    ref: React.Ref<HTMLDivElement>
    ) => (
    <div className={joinClassName(className, "DebugSection", color)} ref={ref} {...props}/>
    )
);
Section.displayName = "Debug.Section";

const Debug = React.forwardRef((
    props: React.ComponentPropsWithoutRef<"div">,
    ref: React.Ref<HTMLDivElement>
    ) => {
        Mouse.Position();
        Mouse.Input();

        // All inner contents are automatically filled in by id search
        // Hence no refs here
        return <div id="Debug" ref={ref} {...props}>
            <Section color="white">
                <Column>
                    Pyroxene v1.0
                </Column>
            </Section>
            <Section color="red">
                <Column id="DebugMousePos">
                    MPos: () 
                </Column>
                <Column id="DebugMouseInput">
                    MInput:
                    <Key className="InputL">L</Key><Key className="InputM">M</Key><Key className="InputR">R</Key>
                </Column>
            </Section>
        </div>;
    }
);
Debug.displayName = "Debug";

export default Debug;