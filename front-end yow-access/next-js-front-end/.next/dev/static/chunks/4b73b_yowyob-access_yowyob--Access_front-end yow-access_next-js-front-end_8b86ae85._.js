(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/language-switcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/lib/language-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LanguageSwitcher() {
    _s();
    const { language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "icon",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/language-switcher.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Switch Language"
                        }, void 0, false, {
                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/language-switcher.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/language-switcher.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/language-switcher.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setLanguage("en"),
                        className: language === "en" ? "bg-accent" : "",
                        children: "English"
                    }, void 0, false, {
                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/language-switcher.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setLanguage("fr"),
                        className: language === "fr" ? "bg-accent" : "",
                        children: "Français"
                    }, void 0, false, {
                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/language-switcher.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/language-switcher.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/language-switcher.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "UZUYajh7f/ecAaqs8+JAYjvISYI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/dashboard-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardHeader",
    ()=>DashboardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/language-switcher.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function DashboardHeader({ title, subtitle, actions }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-border bg-card",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-foreground",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/dashboard-header.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mt-1",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/dashboard-header.tsx",
                            lineNumber: 20,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/dashboard-header.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        actions,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/dashboard-header.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            className: "text-muted-foreground hover:text-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/dashboard-header.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/dashboard-header.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            className: "text-muted-foreground hover:text-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/dashboard-header.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/dashboard-header.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/dashboard-header.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/dashboard-header.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/dashboard-header.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = DashboardHeader;
var _c;
__turbopack_context__.k.register(_c, "DashboardHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SuperAdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$dashboard$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/dashboard-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/lib/language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const tenantData = [
    {
        name: "Week 1",
        tenants: 12,
        users: 240
    },
    {
        name: "Week 2",
        tenants: 19,
        users: 380
    },
    {
        name: "Week 3",
        tenants: 25,
        users: 520
    },
    {
        name: "Week 4",
        tenants: 32,
        users: 780
    }
];
const activityData = [
    {
        action: "Tenant Created",
        timestamp: "2 hours ago",
        tenant: "TechCorp Inc."
    },
    {
        action: "User Invited",
        timestamp: "4 hours ago",
        tenant: "Innovation Labs"
    },
    {
        action: "Role Modified",
        timestamp: "6 hours ago",
        tenant: "Digital Solutions"
    },
    {
        action: "Security Audit",
        timestamp: "1 day ago",
        tenant: "Global Enterprises"
    }
];
function SuperAdminDashboard() {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$dashboard$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardHeader"], {
                title: t.superAdminDash.title,
                subtitle: language === "en" ? "Overview of all tenants and platform activity" : "Aperçu de tous les locataires et des activités de la plateforme",
                actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/super-admin/tenants/create",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "bg-primary hover:bg-primary/90",
                        children: t.tenants.createNew
                    }, void 0, false, {
                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-6 border-border/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: t.superAdminDash.totalTenants
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-3xl font-bold text-foreground mt-2",
                                                        children: "32"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-primary mt-2 flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                                lineNumber: 56,
                                                                columnNumber: 21
                                                            }, this),
                                                            " 15% from last month"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                    className: "w-6 h-6 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-6 border-border/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: t.superAdminDash.activeUsers
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-3xl font-bold text-foreground mt-2",
                                                        children: "1,240"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-primary mt-2 flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 21
                                                            }, this),
                                                            " 8% from last month"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-6 h-6 text-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-6 border-border/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: t.superAdminDash.recentActivity
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-3xl font-bold text-foreground mt-2",
                                                        children: "48"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-primary mt-2 flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                                lineNumber: 86,
                                                                columnNumber: 21
                                                            }, this),
                                                            " Today"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    className: "w-6 h-6 text-orange-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-6 border-border/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-4",
                                            children: language === "en" ? "Growth Trend" : "Tendance de Croissance"
                                        }, void 0, false, {
                                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: 250,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                                data: tenantData,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        strokeDasharray: "3 3",
                                                        stroke: "var(--color-border)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "name",
                                                        stroke: "var(--color-muted-foreground)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        stroke: "var(--color-muted-foreground)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        contentStyle: {
                                                            backgroundColor: "var(--color-card)",
                                                            border: "1px solid var(--color-border)",
                                                            borderRadius: "0.5rem"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                        type: "monotone",
                                                        dataKey: "tenants",
                                                        stroke: "var(--color-primary)",
                                                        strokeWidth: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-6 border-border/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-4",
                                            children: language === "en" ? "Tenant Distribution" : "Distribution des Locataires"
                                        }, void 0, false, {
                                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: 250,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                data: tenantData,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        strokeDasharray: "3 3",
                                                        stroke: "var(--color-border)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "name",
                                                        stroke: "var(--color-muted-foreground)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        stroke: "var(--color-muted-foreground)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        contentStyle: {
                                                            backgroundColor: "var(--color-card)",
                                                            border: "1px solid var(--color-border)",
                                                            borderRadius: "0.5rem"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                        dataKey: "users",
                                                        fill: "var(--color-accent)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-6 border-border/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: t.superAdminDash.recentActivity
                                }, void 0, false, {
                                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: activityData.map((activity, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between p-3 rounded-lg hover:bg-secondary/30 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-sm",
                                                            children: activity.action
                                                        }, void 0, false, {
                                                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: activity.tenant
                                                        }, void 0, false, {
                                                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: activity.timestamp
                                                }, void 0, false, {
                                                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Bureau/4GI projet/yowyob-access/yowyob--Access/front-end yow-access/next-js-front-end/app/super-admin/dashboard/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(SuperAdminDashboard, "d1ORxvPBup+C3Qetit/BVjvgCJk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Bureau$2f$4GI__projet$2f$yowyob$2d$access$2f$yowyob$2d2d$Access$2f$front$2d$end__yow$2d$access$2f$next$2d$js$2d$front$2d$end$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = SuperAdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "SuperAdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=4b73b_yowyob-access_yowyob--Access_front-end%20yow-access_next-js-front-end_8b86ae85._.js.map