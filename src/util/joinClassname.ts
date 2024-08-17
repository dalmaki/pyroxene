export default function joinClassname(...args: (string | undefined)[]): string {
    return args.filter(Boolean).join(" ");
}