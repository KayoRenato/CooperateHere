import { format, formatDistanceToNow } from 'date-fns'

export function titleDateFormatted(date: Date): string {
    return format(date, "PPPP 'at' hh:mm aaa")
}

export function dateRelativeToNowFormatted(date: Date): string {
    return formatDistanceToNow(date,
        {
            addSuffix: true,
            includeSeconds: true,
        })
}

export function dateTimeISO(date: Date): string {
    return date.toISOString()
}