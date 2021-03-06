export default ({ body, title, initialState }) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
          <title>${title}</title>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content="chinweihsu" />
          <meta name="copyright" content="naughtyswing" />
          <meta itemProp="name" content="Naughty Swing official Website" />
          <meta property="og:title" content="Naughty Swing official Website" />
          <meta property="og:site_name" content=" Naughty Swing 搖擺舞團" />
          <meta property="og:type" content="article" />
          <meta property="og:description" content="Naughty Swing 搖擺舞團，於2015年成立，由6位平均舞齡 10 年、擁有不同街舞背景的舞者所組成。 擅長將不同元素融合至Swing Dance當中，呈現有別於以往的演出，為目前台灣新生代指標性Swing舞團。 2016年發起 I Charleston Taipei 影片拍攝計畫，在2周內突破50萬人次點閱率，並獲得10多家媒體報導，包涵今日台灣、蘋果日報以及TVBS。" />
          <meta property="og:url" content="https://naughtyswing.com.tw" />
          <meta name="description" content="Naughty Swing 搖擺舞團，於2015年成立，為目前台灣新生代指標性Swing舞團。2016年發起 I Charleston Taipei 影片拍攝計畫，在2周內突破50萬人次點閱率。提供搖擺舞蹈課程教學、演出舞碼編排、商業演出、舞蹈影片拍攝等服務。We are Naughty Swing, based in Taiepi. More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, teaching and performance as well as video filming and editing. If you're amazed by the beauty of Swing Dance, why not pick some options below and work with us now!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google-site-verification" content="5YfTiykR7Gj4p7fNvcQq4zBNeGxPlOnMkrhT-MzUcnk" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/style.css" />
        </head>

        <body>
          <div id="root">${body}</div>
        </body>

        <script src="/bundle.js"></script>
      </html>
    `;
  };
