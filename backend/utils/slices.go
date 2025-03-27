package utils

// Contains checks if a slice contains a given value.
func Contains[T comparable](slice []T, value T) bool {
    for _, v := range slice {
        if v == value {
            return true
        }
    }
    return false
}

// Index returns the index of a value in a slice, or -1 if not found.
func Index[T comparable](slice []T, value T) int {
    for i, v := range slice {
        if v == value {
            return i
        }
    }
    return -1
}

// Filter returns a new slice containing elements that satisfy a given condition.
func Filter[T any](slice []T, condition func(T) bool) []T {
    var result []T
    for _, v := range slice {
        if condition(v) {
            result = append(result, v)
        }
    }
    return result
}
