/**
 *
 * common
 *
 */
/** @category Common */
export function validateStreamEvent(e) {
    e = e;
    if (e !== 'next' && e !== 'complete')
        throw new Error(`Invalid stream event "${e}"`);
    return e;
}
/** @category Common */
export function parseStreamData(e, data) {
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
