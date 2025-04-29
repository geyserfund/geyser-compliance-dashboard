type EventCallback = (...args: unknown[]) => void;
const events: Record<string, EventCallback[]> = {};

export const subscribe = (eventName: string, callback: EventCallback) => {
    if (!events[eventName]) {
        events[eventName] = [];
    }
    events[eventName].push(callback);
    // Return unsubscribe function
    return () => {
        events[eventName] = events[eventName]?.filter(cb => cb !== callback) ?? [];
    };
};

export const publish = (eventName: string, ...args: unknown[]) => {
    if (events[eventName]) {
        events[eventName].forEach(callback => callback(...args));
    }
}; 