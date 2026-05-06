    function aboutBlank(event) {
      event.preventDefault();
      const destination=event.currentTarget.href;
      const win=window.open('about:blank','_blank')
      if (win) {
        const doc=win.document;
      const iframe=doc.createElement('iframe')
        iframe.style.width='100vw';
        iframe.style.height = '100vh';
        iframe.style.border = 'none';
        iframe.style.position = 'fixed';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.src = destination;
        doc.body.appendChild(iframe);
        doc.body.style.margin = '0';
      }
    }
    document.querySelectorAll('.main').forEach(element => {
      element.addEventListener('click', aboutBlank);
    });
