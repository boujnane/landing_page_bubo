import React from 'react'

const useLocation = () => {
  const [currentPath, setCurrentPath] = React.useState('');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);


  const isFrench = currentPath.startsWith("/fr");
  const localizeUrl = (url: string) => isFrench ? `/fr/${url}` :  "/" + url

  return {
    isFrench,
    currentPath,
    localizeUrl
  }
}

export default useLocation;
