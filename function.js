document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const colorPicker = document.getElementById('colorPicker');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorName = document.getElementById('colorName');
    const rgbValue = document.getElementById('rgbValue');
    const hexValue = document.getElementById('hexValue');
    const rgb565Value = document.getElementById('rgb565Value');
    const alphaSlider = document.getElementById('alphaSlider');
    const alphaValue = document.getElementById('alphaValue');
    const bracketCheckbox = document.getElementById('bracketCheckbox');
    const colorTable = document.getElementById('colorTable').querySelector('tbody');
    const colorTableContainer = document.getElementById('colorTableContainer');
    const colorTableToggle = document.getElementById('colorTableToggle');
    
    // RGB565颜色名称表
    const colorNames = {
        '#FFB6C1': '浅粉红',
        '#FFC0CB': '粉红',
        '#DC143C': '猩红',
        '#FFF0F5': '脸红的淡紫色',
        '#DB7093': '苍白的紫罗兰红色',
        '#FF69B4': '热情的粉红',
        '#FF1493': '深粉色',
        '#C71585': '适中的紫罗兰红色',
        '#DA70D6': '兰花的紫色',
        '#D8BFD8': '蓟',
        '#DDA0DD': '李子',
        '#EE82EE': '紫罗兰',
        '#FF00FF': '洋红',
        '#FF00FF': '灯笼海棠(紫红色)',
        '#8B008B': '深洋红色',
        '#800080': '紫色',
        '#BA55D3': '适中的兰花紫',
        '#9400D3': '深紫罗兰色',
        '#9932CC': '深兰花紫',
        '#4B0082': '靛青',
        '#8A2BE2': '深紫罗兰的蓝色',
        '#9370DB': '适中的紫色',
        '#7B68EE': '适中的板岩暗蓝灰色',
        '#6A5ACD': '板岩暗蓝灰色',
        '#483D8B': '深岩暗蓝灰色',
        '#E6E6FA': '熏衣草花的淡紫色',
        '#F8F8FF': '幽灵的白色',
        '#0000FF': '纯蓝',
        '#0000CD': '适中的蓝色',
        '#191970': '午夜的蓝色',
        '#00008B': '深蓝色',
        '#000080': '海军蓝',
        '#4169E1': '皇家蓝',
        '#6495ED': '矢车菊的蓝色',
        '#B0C4DE': '淡钢蓝',
        '#778899': '浅石板灰',
        '#708090': '石板灰',
        '#1E90FF': '道奇蓝',
        '#F0F8FF': '爱丽丝蓝',
        '#4682B4': '钢蓝',
        '#87CEFA': '淡蓝色',
        '#87CEEB': '天蓝色',
        '#00BFFF': '深天蓝',
        '#ADD8E6': '淡蓝',
        '#B0E0E6': '火药蓝',
        '#5F9EA0': '军校蓝',
        '#F0FFFF': '蔚蓝色',
        '#E0FFFF': '淡青色',
        '#AFEEEE': '苍白的绿宝石',
        '#00FFFF': '青色',
        '#00FFFF': '水绿色',
        '#00CED1': '深绿宝石',
        '#2F4F4F': '深石板灰',
        '#008B8B': '深青色',
        '#008080': '水鸭色',
        '#48D1CC': '适中的绿宝石',
        '#20B2AA': '浅海洋绿',
        '#40E0D0': '绿宝石',
        '#7FFFAA': '绿玉碧绿色',
        '#66CDAA': '适中的碧绿色',
        '#00FA9A': '适中的春天的绿色',
        '#F5FFFA': '薄荷奶油',
        '#3CB371': '春天的绿色',
        '#2E8B57': '海洋绿',
        '#F0FFF0': '蜂蜜',
        '#90EE90': '淡绿色',
        '#98FB98': '苍白的绿色',
        '#8FBC8F': '深海洋绿',
        '#32CD32': '酸橙绿',
        '#00FF00': '酸橙色',
        '#228B22': '森林绿',
        '#008000': '纯绿',
        '#006400': '深绿色',
        '#7FFF00': '查特酒绿',
        '#7CFC00': '草坪绿',
        '#ADFF2F': '绿黄色',
        '#6B8E23': '橄榄土褐色',
        '#F5F5DC': '米色(浅褐色)',
        '#FAFAD2': '浅秋麒麟黄',
        '#FFFFF0': '象牙',
        '#FFFFE0': '浅黄色',
        '#FFFF00': '纯黄',
        '#808000': '橄榄',
        '#BDB76B': '深卡其布',
        '#FFFACD': '柠檬薄纱',
        '#EEE8AA': '灰秋麒麟',
        '#F0E68C': '卡其布',
        '#FFD700': '金',
        '#FFF8DC': '玉米色',
        '#DAA520': '秋麒麟',
        '#FFFAF0': '花的白色',
        '#FDF5E6': '老饰带',
        '#F5DEB3': '小麦色',
        '#FFE4B5': '鹿皮鞋',
        '#FFA500': '橙色',
        '#FFEFD5': '番木瓜',
        '#FFEBCD': '漂白的杏仁',
        '#FFDEAD': '纳瓦霍白',
        '#FAEBD7': '古代的白色',
        '#D2B48C': '晒黑',
        '#DEB887': '结实的树',
        '#FFE4C4': '浓汤乳脂',
        '#FF8C00': '深橙色',
        '#FAF0E6': '亚麻布',
        '#CD853F': '秘鲁',
        '#FFDAB9': '桃色',
        '#F4A460': '沙棕色',
        '#D2691E': '巧克力',
        '#8B4513': '马鞍棕色',
        '#FFF5EE': '海贝壳',
        '#A0522D': '黄土赭色',
        '#FFA07A': '浅鲜肉(鲑鱼)色',
        '#FF7F50': '珊瑚',
        '#FF4500': '橙红色',
        '#E9967A': '深鲜肉(鲑鱼)色',
        '#FF6347': '番茄',
        '#FFE4E1': '薄雾玫瑰',
        '#FA8072': '鲜肉(鲑鱼)色',
        '#FFFAFA': '雪',
        '#F08080': '淡珊瑚色',
        '#BC8F8F': '玫瑰棕色',
        '#CD5C5C': '印度红',
        '#FF0000': '纯红',
        '#A52A2A': '棕色',
        '#B22222': '耐火砖',
        '#8B0000': '深红色',
        '#800000': '栗色',
        '#FFFFFF': '纯白',
        '#F5F5F5': '白烟',
        '#DCDCDC': '亮灰色',
        '#D3D3D3': '浅灰色',
        '#C0C0C0': '银白色',
        '#A9A9A9': '深灰色',
        '#808080': '灰色',
        '#696969': '暗淡的灰色',
        '#000000': '纯黑'
    };
    
    // 当前颜色值
    let currentColor = "#4a69bd";
    let currentAlpha = 1.0;
    let isColorTableExpanded = false;
    
    // 生成颜色表
    function generateColorTable() {
        colorTable.innerHTML = '';
        
        for (const [hex, name] of Object.entries(colorNames)) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <span class="color-sample" style="background-color:${hex}"></span>
                    ${name}
                </td>
                <td>${hex}</td>
            `;
            
            // 点击行选择颜色
            row.addEventListener('click', () => {
                colorPicker.value = hex.toLowerCase();
                updateColor();
                collapseColorTable();
            });
            
            colorTable.appendChild(row);
        }
    }
    
    // 更新颜色显示
    function updateColor() {
        currentColor = colorPicker.value;
        
        // 更新显示颜色
        const r = parseInt(currentColor.substr(1, 2), 16);
        const g = parseInt(currentColor.substr(3, 2), 16);
        const b = parseInt(currentColor.substr(5, 2), 16);
        
        colorDisplay.style.background = `rgba(${r}, ${g}, ${b}, ${currentAlpha})`;
        
        // 更新颜色名称
        const name = colorNames[currentColor.toUpperCase()] || '自定义颜色';
        colorName.textContent = name;
        
        // 更新HEX值
        hexValue.textContent = currentColor.toUpperCase();
        
        // 更新RGB值
        updateRGBValue();
        
        // 更新RGB565值
        updateRGB565Value(r, g, b);
    }
    
    // 更新RGB值（考虑透明度和格式）
    function updateRGBValue() {
        const r = parseInt(currentColor.substr(1, 2), 16);
        const g = parseInt(currentColor.substr(3, 2), 16);
        const b = parseInt(currentColor.substr(5, 2), 16);
        
        if (bracketCheckbox.checked) {
            if (currentAlpha < 1.0) {
                rgbValue.textContent = `rgba(${r}, ${g}, ${b}, ${currentAlpha.toFixed(2)})`;
            } else {
                rgbValue.textContent = `rgb(${r}, ${g}, ${b})`;
            }
        } else {
            if (currentAlpha < 1.0) {
                rgbValue.textContent = `${r}, ${g}, ${b}, ${currentAlpha.toFixed(2)}`;
            } else {
                rgbValue.textContent = `${r}, ${g}, ${b}`;
            }
        }
    }
    
    // 更新RGB565值
    function updateRGB565Value(r, g, b) {
        // 转换为RGB565
        const r5 = (r >> 3) & 0x1F;
        const g6 = (g >> 2) & 0x3F;
        const b5 = (b >> 3) & 0x1F;
        
        const rgb565 = (r5 << 11) | (g6 << 5) | b5;
        const hex565 = `0x${rgb565.toString(16).padStart(4, '0')}`.toUpperCase();
        rgb565Value.textContent = hex565;
    }
    
    // 更新透明度
    function updateAlpha() {
        currentAlpha = alphaSlider.value / 100;
        alphaValue.textContent = `${alphaSlider.value}%`;
        updateColor();
    }
    
    // 切换颜色表显示
    function toggleColorTable() {
        isColorTableExpanded = !isColorTableExpanded;
        if (isColorTableExpanded) {
            colorTableContainer.classList.add('expanded');
            colorTableToggle.innerHTML = '<i class="fas fa-compress"></i> 收起颜色表';
        } else {
            colorTableContainer.classList.remove('expanded');
            colorTableToggle.innerHTML = '<i class="fas fa-expand"></i> 展开颜色表';
        }
    }
    
    // 收起颜色表
    function collapseColorTable() {
        isColorTableExpanded = false;
        colorTableContainer.classList.remove('expanded');
        colorTableToggle.innerHTML = '<i class="fas fa-expand"></i> 展开颜色表';
    }
    
    // 复制功能
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-value');
            let textToCopy = '';
            
            switch(type) {
                case 'rgb':
                    textToCopy = rgbValue.textContent;
                    break;
                case 'hex':
                    textToCopy = hexValue.textContent;
                    break;
                case 'rgb565':
                    textToCopy = rgb565Value.textContent;
                    break;
            }
            
            // 使用Clipboard API复制文本
            navigator.clipboard.writeText(textToCopy).then(() => {
                // 显示复制成功反馈
                const originalHtml = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> 已复制';
                this.style.background = '#2ecc71';
                
                setTimeout(() => {
                    this.innerHTML = originalHtml;
                    this.style.background = '#4a69bd';
                }, 1500);
            });
        });
    });
    
    // 事件监听
    colorPicker.addEventListener('input', updateColor);
    alphaSlider.addEventListener('input', updateAlpha);
    bracketCheckbox.addEventListener('change', updateColor);
    colorTableToggle.addEventListener('click', toggleColorTable);
    
    // 初始化
    generateColorTable();
    updateAlpha();
});