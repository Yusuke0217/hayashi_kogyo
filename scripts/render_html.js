
const renderHtmlToId = ({id='', filePath}) => {
  const element = document.getElementById(id);
  if (!element) { return; }

  return (
    fetch(filePath)
      .then((res) => { return res.text(); })
      .then((data) => { return element.innerHTML = data; })
  )
};

