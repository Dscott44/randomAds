function displayRandomAd() {
  // Define an array with the ad codes
  const adCodes = [
    '<![CDATA[<script type="text/javascript">'
    + 'atOptions = {'
    + "\'key\' : \'cb1082b19269584f275682ffff55e3c1\',"
    + "\'format\' : \'iframe\',"
    + "\'height\' : 250,"
    + "\'width\' : 300,"
    + "\'params\' : {}"
    + '};'
    + "document.write(\'<scr\' + \'ipt type=\"text/javascript\" src=\"http\' + (location.protocol === \'https:\' ? \'s\' : \'\') + \'://www.profitabledisplaynetwork.com/cb1082b19269584f275682ffff55e3c1/invoke.js\"></scr\' + \'ipt>\');"
    + '</script>]]>',
    '<![CDATA[<div id="ezoic-pub-ad-placeholder-165"></div>]]>',
    '<![CDATA[<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2362701595854272"'
    + ' crossorigin="anonymous"></script>'
    + '<ins class="adsbygoogle"'
    + ' style="display:block"'
    + ' data-ad-client="ca-pub-2362701595854272"'
    + ' data-ad-slot="2311819400"'
    + ' data-ad-format="auto"'
    + ' data-full-width-responsive="true"></ins>'
    + '<script>'
    + '(adsbygoogle = window.adsbygoogle || []).push({});'
    + '</script>]]>'
  ];

  // Randomly select an ad code from the array
  const randomAdCode = adCodes[Math.floor(Math.random() * adCodes.length)];

  // Inject the ad code into the HTML of your blog
  const adContainers = document.querySelectorAll(".ad-container");
  const adContainer = adContainers[Math.floor(Math.random() * adContainers.length)];
  adContainer.innerHTML = randomAdCode;
}

// Call the displayRandomAd function to display a random ad on your blog
displayRandomAd();
