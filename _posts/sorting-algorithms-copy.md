---
title: '정렬 알고리즘'
author: 'Krishna'
date: '2021-12-02T03:13:27.552Z'
thumbnail: 'clock(gruv).jpg'
---
1. 버 정렬 (Bubble Sort)

    Array의 Element들을 하나씩 대조하면서 정렬하는 알고리즘.  

    Best: n, Average: n^2, Worst: n^2

    ```go
    func BubbleSort(list []int) {
        length := len(list)
        for i := 0; i < length; i++ {
            j := i

            for j > 0 {
                if list[j-1] > list[j] {
                    Swap(list, j-1, j)
                }
            j--
            }
        }
    }
    ```

2. 선택 정력 (Selection Sort)

    Array중 값이 가장 작은 Element를 Array의 첫번째, 두번째, 세번째, ... 순으로 옮긴다.\
    \
    Best: n^2, Average: n^2, Worst: n^2

    ```go
    func SelectionSort(list []int) {
        length := len(list)
            for i := 0; i < length-1; i++ {
                // Finding minimum element of list
                indexMin := i
                for j := i + 1; j < length; j++ {
                    if list[j] < list[indexMin] {
                        indexMin = j
                    }
                }

                // Swaping minimum element of list with first element
                if indexMin != i {
                    Swap(list, i, indexMin)
                }
            }
    }
    ```

3. 삽입 정렬 (Insertion Sort)

    Array의 Element를 순서데로 (1번+2번, 2번+3번, 4번+5번...) 비교하고 작은걸 앞으로? 보낸다.\
    \
    Best: n, Average: n^2, Worst: n^2

    ```go
    func InsertionSort(list []int) {
        length := len(list)

        for i:= 0; i < length-1; i++ {
            j := i

            for j > 0 && list[j-1] > list[j] {
                Swap(list, j-1, j)
                j--
            }
        }
    }
    ```

4. 합병 정렬 (Merge Sort)

    제귀함수로 Array를 계속 반으로 나누어 반으로 나눈것들을 따로 정렬하고, 합치면서 다시 정렬하는 정렬 방식.\
    \
    Best: n log n, Average: n log n, Worst: n log n

    ```go
    func MergeSort(list []int) []int {
        length := len(list)
        middle := length / 2
        if length <= 1 {
            return list
        }

        // Split list to left, right list
        var (
            left  = make([]int, middle)
            right = make([]int, length-middle)
        )

        for i := 0; i < length; i++ {
            if i < middle {
                left[i] = list[i]
            } else {
                right[i-middle] = list[i]
            }
        }

        left = MergeSort(left)
        right = MergeSort(right)

        return Merge(left, right)
    }

    // Merges list of int while sorting them
    func Merge(left, right []int) (result []int) {
    result = make([]int, len(left)+len(right))

    i := 0
    for len(left) > 0 && len(right) > 0 {
        if left[0] <= right[0] {
            result[i] = left[0]
            left = left[1:]
        } else {
            result[i] = right[0]
            right = right[1:]
        }
        i++
    }

    // If there is remaining
    for j := 0; j < len(left); j++ {
        result[i] = left[j]
        i++
    }
    for j := 0; j < len(right); j++ {
        result[i] = right[j]
        i++
    }

    return result
    }
    ```
