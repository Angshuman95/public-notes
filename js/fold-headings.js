document.addEventListener('DOMContentLoaded', function () {
  const mainContent = document.querySelector('.md-content');
  if (!mainContent) return;

  // Helper function to wrap the content in a div
  function wrapContent(heading, tagName) {
    let content = document.createElement('div');
    content.style.display = 'none';
    let nextElement = heading.nextElementSibling;

    while (
      nextElement &&
      !new RegExp(`^H[1-${tagName.charAt(1)}]$`).test(nextElement.tagName)
    ) {
      let temp = nextElement.nextElementSibling;
      content.appendChild(nextElement);
      nextElement = temp;
    }

    heading.parentNode.insertBefore(content, heading.nextElementSibling);
    return content;
  }

  // Helper function to add click event for folding/unfolding
  function addToggleFunctionality(heading, content) {
    const icon = document.createElement('span');
    icon.className = 'folding-icon';
    icon.innerHTML = '&#9654;'; // right-pointing triangle
    heading.prepend(icon);

    heading.style.cursor = 'pointer';
    heading.addEventListener('click', function () {
      if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.innerHTML = '&#9660;'; // down-pointing triangle
      } else {
        content.style.display = 'none';
        icon.innerHTML = '&#9654;'; // right-pointing triangle
      }
    });
  }

  // Add event listener to h1 to fold/unfold everything
  const h1Headings = mainContent.querySelectorAll('h1');
  h1Headings.forEach((h1) => {
    h1.style.cursor = 'pointer';
    h1.addEventListener('click', function () {
      const isAnyContentVisible = Array.from(
        mainContent.querySelectorAll('h2, h3, h4, h5, h6'),
      ).some(
        (heading) =>
          heading.nextElementSibling &&
          heading.nextElementSibling.style.display === 'block',
      );
      const newDisplayStyle = isAnyContentVisible ? 'none' : 'block';
      const newIcon = isAnyContentVisible ? '&#9654;' : '&#9660;'; // right-pointing or down-pointing triangle

      for (let level = 2; level <= 6; level++) {
        const headings = mainContent.querySelectorAll(`h${level}`);
        headings.forEach((heading) => {
          const content = heading.nextElementSibling;
          if (content && content.style) {
            content.style.display = newDisplayStyle;
            const icon = heading.querySelector('.folding-icon');
            if (icon) {
              icon.innerHTML = newIcon;
            }
          }
        });
      }
    });
  });

  // Find and process all headings starting from h2 to h6
  for (let level = 2; level <= 6; level++) {
    const headings = mainContent.querySelectorAll(`h${level}`);
    headings.forEach((heading) => {
      const content = wrapContent(heading, `h${level}`);
      addToggleFunctionality(heading, content);
    });
  }
});
