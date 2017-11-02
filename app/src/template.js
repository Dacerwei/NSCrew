export default ({ body, title, initialState }) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="author" content="chinweihsu">
          <meta name="copyright" content="naughtyswing">
          <meta itemprop="name" content="Naughty Swing official Website">
          <meta property="og:title" content="Naughty Swing official Website" >
          <meta property="og:site_name" content=" Naughty Swing 搖擺舞團" >
          <meta property="og:type" content="article">
          <meta property="og:description" content="Naughty Swing 搖擺舞團，於2015年成立，由6位平均舞齡 10 年、擁有不同街舞背景的舞者所組成。 擅長將不同元素融合至Swing Dance當中，呈現有別於以往的演出，為目前台灣新生代指標性Swing舞團。 2016年發起 I Charleston Taipei 影片拍攝計畫，在2周內突破50萬人次點閱率，並獲得10多家媒體報導，包涵今日台灣、蘋果日報以及TVBS。">
          <meta property="og:url" content="https://naughtyswing.com.tw">
          <title>${title}</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div id="root">${body}</div>
        </body>
        <script src="/bundle.js"></script>
      </html>
    `;
  };