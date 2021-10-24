"use strict";
/**
 *
 * common
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStreamData = exports.validateStreamEvent = void 0;
/** @category Common */
function validateStreamEvent(e) {
    e = e;
    if (e !== 'next' && e !== 'complete')
        throw new Error(`Invalid stream event "${e}"`);
    return e;
}
exports.validateStreamEvent = validateStreamEvent;
/** @category Common */
function parseStreamData(e, data) {
    if (data) {
        try {
            data = JSON.parse(data);
        }
        catch (_a) {
            throw new Error('Invalid stream data');
        }
    }
    if (e === 'next' && !data)
        throw new Error('Stream data must be an object for "next" events');
    return (data || null);
}
exports.parseStreamData = parseStreamData;
