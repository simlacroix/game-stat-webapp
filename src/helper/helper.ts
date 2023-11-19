export function roundToDecimal(num: number, decimals: number): string {
    const factor = Math.pow(10, decimals);
    const rounded = Math.round((num + Number.EPSILON) * factor) / factor;
    return rounded.toFixed(decimals).padEnd(decimals + 2, '0');
}

export function roundPercentageToNaturalNumber(percentage: number): number {
    return Math.round(percentage * 100);
}

export function calculateElapsedTime(gameEndTimestamp: number): string {
    const now = new Date();

    const elapsedMilliseconds = now.getTime() - gameEndTimestamp;

    if (elapsedMilliseconds < 1000) {
        return 'just now';
    }

    const elapsedSeconds = elapsedMilliseconds / 1000;

    if (elapsedSeconds < 60) {
        return `${Math.floor(elapsedMilliseconds)} seconds ago`;
    }

    const elapsedMinutes = elapsedSeconds / 60;

    if (elapsedMinutes < 60) {
        return `${Math.floor(elapsedMinutes)} minutes ago`;
    }

    const elapsedHours = elapsedMinutes / 60;

    if (elapsedHours < 24) {
        return `${Math.floor(elapsedHours)} hours ago`;
    }

    const elapsedDays = elapsedHours / 24;

    if (elapsedDays < 30) {
        return `${Math.round(elapsedDays)} days ago`;
    }

    const elapsedMonths = elapsedDays / 30;

    if (elapsedMonths < 12) {
        return `${Math.floor(elapsedMonths)} months ago`;
    }

    const elapsedYears = elapsedMonths / 12;

    return `${Math.floor(elapsedYears)} years ago`;
}

export function calculateGameTimeDuration(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return `${minutes}m ${seconds}s`;
}