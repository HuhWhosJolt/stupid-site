// 1. Define the function
function openAboutBlank(event) {
  // Prevent the browser from just following the link normally
  event.preventDefault();

  // 'event.currentTarget' refers to the <a> tag that was clicked
  const destination = event.currentTarget.href;

  // 2. The "About Blank" logic
  const win = window.open('about:blank', '_blank');
  
  // Ensure the new window is ready, then inject an iframe
  if (win) {
    const doc = win.document;
    const iframe = doc.createElement('iframe');
    
    // Style the iframe to fill the entire page
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    
    // Set the iframe source to the destination file/URL
    iframe.src = destination;
    
    doc.body.appendChild(iframe);
    doc.body.style.margin = '0';
  }
}

// 3. Attach the function to all buttons with class "main"
document.querySelectorAll('.main').forEach(element => {
  element.addEventListener('click', openAboutBlank);
});
