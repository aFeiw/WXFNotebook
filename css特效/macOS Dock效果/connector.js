window.onload = function () {
  document.querySelectorAll('.dock li').forEach((li) => {
    li.addEventListener('click', e => {
      e.currentTarget.classList.add('loading')
    })

    li.addEventListener('mousemove', (e) => {
      let item = e.target;

      // 获取图标的位置
      let itemRect = item.getBoundingClientRect();
      let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width;
      // 获取当前鼠标所在的图标，前一个以及后一个li元素
      let prev = item.previousElementSibling || null;
      let next = item.nextElementSibling || null;

      // 定义一个变数 我们想让图标放大到1.6倍
      let scale = 0.6;

      resetScale();

      if (prev) {
        prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1));
      }

      item.style.setProperty('--scale', 1 + scale);

      if (next) {
        next.style.setProperty('--scale', 1 + scale * offset);
      }
    });
  });

  document.querySelector('.dock').addEventListener('mouseleave', (e) => {
    resetScale();
  });

  function resetScale() {
    document.querySelectorAll('.dock li').forEach((li) => {
      li.style.setProperty('--scale', 1);
    });
  }
};
