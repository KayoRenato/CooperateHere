import { format, formatDistanceToNow } from 'date-fns'

export function titleDateFormatted(date) {
    return format(date, "PPPP 'at' hh:mm aaa")
}

export function dateRelativeToNowFormatted(date) {
    return formatDistanceToNow(date, 
        {
            addSuffix: true,
            includeSeconds: true,
        })
}

export function dateTimeISO(date) {
    return date.toISOString()
}