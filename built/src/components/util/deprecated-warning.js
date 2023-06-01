import { useEffect } from 'react';
function log(msg) {
    if (process.env.NODE_ENV === 'development') {
        console.warn(`❌ Deprecation Warning`, msg);
    }
}
export function useDeprecatedWarning(msg) {
    useEffect(() => {
        log(msg);
    }, []);
}
export function deprecatedWarning(msg) {
    log(msg);
}
//# sourceMappingURL=deprecated-warning.js.map