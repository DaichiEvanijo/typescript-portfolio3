import {  useEffect, useState,  } from "react";

type OptionType = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};
type UseIntersectionObserverProps<T extends HTMLElement>= {
  options:OptionType[];
  refs: React.RefObject<T>[];
};
const useIntersectionObserver = <T extends HTMLElement>({
  options = [],
  refs,
}: UseIntersectionObserverProps<T>) => {

  const [isLoaded, setIsLoaded] = useState<boolean[]>(new Array(refs.length).fill(false));
  // new Array(refs.length).fill(false)→[false, false, false,...]をrefの数だけ作っている

  useEffect(() => {
    
    const observers: IntersectionObserver[] = [];

    const loadText = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        const index = refs.findIndex(ref => ref.current === entry.target);
        if (index === -1) return; 

        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          setIsLoaded(prev =>
            prev.map((value, i) => i === index ? true : value)
          );
        }
      });
    };

    refs.forEach((ref, index) => {
      const observer = new IntersectionObserver(entries => loadText(entries, observer), options[index]);

      if (ref.current) {
        observer.observe(ref.current);
      } 
      
      observers.push(observer);
      // pushは以下でcleanupをするため
    });

    return () => {
      observers.forEach(observer => {
        observer.disconnect(); 
      });
    };
  }, [options, refs]);

  return isLoaded;
};

export default useIntersectionObserver;