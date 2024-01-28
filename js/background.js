
    // 定义星星的数量常量
    const COUNT_OF_STARS = 30;

    // 使用D3选择具有类名'stars'的元素
    d3.select('.stars')
        .selectAll('span')  // 选择'.stars'元素内的所有'span'元素

        // 将数据绑定到所选元素，使用从0到COUNT_OF_STARS的数字范围
        .data(d3.range(COUNT_OF_STARS))

        // 对于每个数据点，进入选择并追加一个'span'元素
        .enter()
        .append('span')

        // 将'--left' CSS变量的样式属性设置为1到100之间的随机值
        .style('--left', () => Math.ceil(Math.random() * 100))

        // 将'--size' CSS变量的样式属性设置为1到2.5之间的随机值
        .style('--size', () => Math.random() * 1.5 + 1)

        // 将'--opacity' CSS变量的样式属性设置为0.5到0.8之间的随机值
        .style('--opacity', () => Math.random() * 0.3 + 0.5)

        // 将'--duration' CSS变量的样式属性设置为1到3之间的随机值
        .style('--duration', () => Math.random() * 2 + 1)

        // 根据索引设置'--delay' CSS变量的样式属性，以创建错开效果
        .style('--delay', (d) => d * -0.05);