// 마우스 커스텀 위치에 따라오게
document.addEventListener('mousemove', (e) => {
    const cursorDefaultInner = document.querySelector(
      '.cursor_default_inner',
    );
    const cursorTraceInner = document.querySelector('.cursor_trace_inner');

    cursorDefaultInner.style.top = e.clientY + 'px';
    cursorDefaultInner.style.left = e.clientX + 'px';

    cursorTraceInner.style.top = e.clientY + 'px';
    cursorTraceInner.style.left = e.clientX + 'px';
  });

  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousedown', () => {
    cursor.classList.add('cursor-active');
  });

  document.addEventListener('mouseup', () => {
    cursor.classList.remove('cursor-active');
  });

  // 클릭시 물결
  function createRipple(e) {
    // 요소 추가
    let ripple = document.createElement('span');

    ripple.classList.add('ripple');

    // 커서라는 div에 붙인다
    cursor.appendChild(ripple);

    // 위치조정
    ripple.style.top = e.clientY - ripple.clientHeight / 2 + 'px';
    ripple.style.left = e.clientX - ripple.clientWidth / 2 + 'px';

    ripple.addEventListener('animationend', () => {
      cursor.removeChild(ripple);
    });
  }

  document.addEventListener('click', (e) => {
    createRipple(e);
  });