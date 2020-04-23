//实现HashMap
/**
  * 自定义HashMap
  */
function HashMap() {
    // 最大容量（必须是2的幂且小于2的30次方，传入容量过大将被这个值替换）
    let maxCapacity = 1 << 30;
    // HashMap的默认容量大小(2^n)
    let initialCapacity = 16;
    // HashMap的实际大小，默认为initialCapacity
    let capacity = initialCapacity;
    // 默认的负载因子
    let loadFactor = 0.75;
    // 临界值
    let threshold = capacity * loadFactor;
    // 已用空间
    let size = 0;
    // map结构被改变的次数
    let modCount = 0;
    // 存放键值对key-value
    let table = new Array(capacity);

    /**
       * 幂次方化capacity
       */
    function powerCapacity() {
        while (capacity < initialCapacity) {
            capacity <<= 1;
        }
    }

    /**
       * 私有方法 hashCode方法 
       * str: 待计算的字符串
       */
    function hashCode(str) {
        let hash = 0;
        let tempStr = JSON.stringify(str);
        if (tempStr.length === 0) {
            return hash;
        }
        for (let i = 0, len = tempStr.length; i < len; i++) {
            let chr = tempStr.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        return hash;
    }

    /**
       * equals方法
       */
    function equals(objf, objs) {
        if (objf == null || objs == null) {
            return false;
        }
        if (objf === objs) {
            return true;
        }
        return false;
    }

    /**
       * 将key-value对添加到table索引位置为bucketIndex中
       */
    function addEntry(h, k, v, bucketIndex) {
        // 获取指定 bucketIndex 索引处的 Entry
        let entry = table[bucketIndex];
        // 将新创建的 Entry放入 bucketIndex索引处，并让新的 Entry指向原来的 Entry
        table[bucketIndex] = {
            hash: h,
            key: k,
            value: v,
            next: entry
        };
        // size超过临界值,默认扩充至当前table长度的两倍
        if (size++ >= threshold) {
            resize(2 * table.length);
        }
    }

    /**
       * 扩容
       */
    function resize(newCapacity) {
        let oldCapacity = table.length;
        if (oldCapacity === maxCapacity) {
            threshold = Number.MAX_VALUE;
            return;
        }
        // 创建新数组，容量为指定的容量
        rehash(new Array(newCapacity));
        // 设置下一次需要调整数组大小的界限
        threshold = newCapacity * loadFactor;
    }

    function rehash(newTable) {
        // 保留原数组的引用到src中
        let src = table;
        let newCapacity = newTable.length;
        for (let j = 0; j < src.length; j++) {
            let e = src[j];
            if (e != null) {
                // 将原数组中的元素置为null
                src[j] = null;
                // 遍历原数组中j位置指向的链表
                do {
                    let next = e.next;
                    // 根据新的容量计算e在新数组中的位置
                    let i = indexFor(e.hash, newCapacity);
                    // 将e插入到newTable[i]指向的链表的头部
                    e.next = newTable[i];
                    newTable[i] = e;
                    e = next;
                } while (e != null);
            }
        }
        table = newTable;
    }

    /**
       * 私有方法 hash方法 
       * h: hashCode(key)的值
       */
    function hash(h) {
        // 无符号右移，高位补0
        h ^= (h >>> 20) ^ (h >>> 12);
        return h ^ (h >>> 7) ^ (h >>> 4);
    }

    /**
       * 私有方法 indexFor方法 
       * h: hashCode(key)的值 
       * length: table的长度
       */
    function indexFor(h, length) {
        return h & (length - 1);
    }

    /**
       * 当调用put(k,v)方法存入键值对时，如果k已经存在，则该方法被调用
       */
    function recordAccess(entry) {
    }

    /**
       * 当Entry被从HashMap中移除时被调用
       */
    function recordRemoval(entry) {
    }

    /**
       * 公有方法 存储键值对 
       * key: value:
       */
    if (HashMap.prototype.put === undefined) {
        HashMap.prototype.put = function (key, value) {
            // 不允许key为空
            if (key == null) {
                throw "the key can not be null,but the key of entry" + " map[" + size + "] is null";
                return null;
            }
            // 根据key的hashCode再次计算hash值
            let hashVal = hash(hashCode(key));
            // 根据hash值计算在table中的索引
            let index = indexFor(hashVal, table.length);
            // 如果table[index] != null，说明该位置上已经有元素
            for (let e = table[index]; e != null; e = e.next) {
                let k;
                if (e.hash === hashVal && ((k = e.key) === key || equals(key, k))) {
                    let oldValue = e.value;
                    e.value = value;
                    recordAccess(e);
                    return oldValue;
                }
            }
            modCount++;
            addEntry(hashVal, key, value, index);
            return null;
        };
    }
    /**
       * 公有方法 根据给定的key获取value 
       * key: 关键字
       */
    if (HashMap.prototype.get === undefined) {
        HashMap.prototype.get = function (key) {
            if (key == null) {
                return null;
            }
            let hashVal = hash(hashCode(key));
            for (let e = table[indexFor(hashVal, table.length)]; e != null; e = e.next) {
                let k;
                if (e.hash === hashVal && ((k = e.key) === key || equals(key, k))) {
                    return e.value;
                }
            }
            return null;
        };
    }
    /**
       * 返回HashMap的大小
       */
    if (HashMap.prototype.size === undefined) {
        HashMap.prototype.size = function () {
            return size;
        };
    }
    /**
       * 清除HashMap中的内容
       */
    if (HashMap.prototype.clear === undefined) {
        HashMap.prototype.clear = function () {
            modCount++;
            let tab = table;
            for (let i = 0; i < tab.length; i++) {
                tab[i] = null;
            }
            size = 0;
        };
    }
}

function init() {
    let t1 = Date.now()
    let map = new HashMap();
    for (let i = 0; i < 10000000; i++) {
        map.put(i,i+1)
    }
    let t2 = Date.now()
    console.log(t2-t1)
    return map
}
function test(map) {
    let t1 = Date.now()
    for (let i = 0; i < 100000000; i++) {
        map.get(2)
    }
    let t2 = Date.now()
    console.log(t2-t1)
}

test(init())
