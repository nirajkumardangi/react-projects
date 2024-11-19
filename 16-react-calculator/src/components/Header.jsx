export default function Header() {
  return (
    <header>
      <h2 style={{ marginBottom: '0.4rem' }}>calc</h2>
      <div id='divider'>
        <p style={{ marginBottom: '0.4rem' }}>THEME</p>
        <div className='themes'>
          <div className='theme-number'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className='theme-color'>
            <input type='radio' name='color' id='color1' />
            <input type='radio' name='color' id='color2' />
            <input type='radio' name='color' id='color3' />
          </div>
        </div>
      </div>
    </header>
  );
}
