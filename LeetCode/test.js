function get(x) {
    let res = 0;
    for (; x; x /= 10) {
        res += x % 10;
    }
    return res;
}

function movingCount(m, n, k) {
    if (!k) return 1;
    let vis = [[]]
    let
        ans = 1;
    vis[0][0] = 1;
    for (let i = 0;
         i < m;
         ++i
    ) {
        for (let j = 0;
             j < n;
             ++j
        ) {
            if ((i == 0 && j == 0) || get(i) + get(j) > k) continue;
            // 边界判断
            if (i - 1 >= 0) vis[i][j] |= vis[i - 1][j];
            if (j - 1 >= 0) vis[i][j] |= vis[i][j - 1];
            ans += vis[i][j];
        }
    }
    return ans;
}
}
