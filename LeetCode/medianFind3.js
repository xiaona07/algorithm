const defaultCmp = (x, y) => x > y; // 默认是最大堆

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

class Heap {
    /**
     * 默认是最大堆
     * @param {Function} cmp
     */
    constructor(cmp = defaultCmp) {
        this.container = [];
        this.cmp = cmp;
    }
    //向堆中添加一个元素
    add(data) {
        const {container, cmp} = this;
        container.push(data);
        let index = container.length - 1;
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (!cmp(container[index], container[parent])) {
                return;
            }
            swap(container, index, parent);
            index = parent;
        }
    }
    //移出堆顶
    poll() {
        const {container, cmp} = this;
        if (!container.length) {
            return null;
        }
        swap(container, 0, container.length - 1);
        const res = container.pop();
        const length = container.length;
        let index = 0, exchange = index * 2 + 1;
        while (exchange < length) {
            let right = index * 2 + 2;
            if (right < length && cmp(container[right], container[exchange])) {
                exchange = right;
            }
            if (!cmp(container[exchange], container[index])) {
                break;
            }
            swap(container, exchange, index);
            index = exchange;
            exchange = index * 2 + 1;
        }

        return res;
    }
    //获取堆顶
    top() {
        if (this.container.length) return this.container[0];
        return null;
    }
}


var MedianFinder = function () {
    this.maxHeap = new Heap();
    this.minHeap = new Heap((x, y) => x < y);
};

MedianFinder.prototype.addNum = function (num) {
    if (this.maxHeap.container.length !== this.minHeap.container.length) {
        this.maxHeap.add(num);
        this.minHeap.add(this.maxHeap.poll());
    } else {
        this.minHeap.add(num);
        this.maxHeap.add(this.minHeap.poll());
    }
};

MedianFinder.prototype.findMedian = function () {
    return this.maxHeap.container.length > this.minHeap.container.length
        ? this.maxHeap.top()
        : (this.maxHeap.top() + this.minHeap.top()) / 2;
};
