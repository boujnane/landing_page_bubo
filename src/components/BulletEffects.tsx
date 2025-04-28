'use client';

import { useEffect } from "react";

export default function BulletEffects() {
  useEffect(() => {
    const bulletItems = document.querySelectorAll('.bullet-item');

    bulletItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        let index = Array.from(bulletItems).indexOf(item);

        for (let i = 0; i < index; i++) {
          bulletItems[i].querySelectorAll('.be_blur').forEach((el) => {
            (el as HTMLElement).style.filter = 'blur(4px)';
            (el as HTMLElement).style.opacity = '0.5';
          });
        }

        for (let i = index + 1; i < bulletItems.length; i++) {
          bulletItems[i].querySelectorAll('.be_blur').forEach((el) => {
            (el as HTMLElement).style.filter = 'blur(4px)';
            (el as HTMLElement).style.opacity = '0.5';
          });
        }

        item.querySelectorAll('.be_blur').forEach((el) => {
          (el as HTMLElement).style.filter = 'blur(4px)';
          (el as HTMLElement).style.opacity = '0.5';
        });
      });

      item.addEventListener('mouseleave', () => {
        bulletItems.forEach((el) => {
          el.querySelectorAll('.be_blur').forEach((subEl) => {
            (subEl as HTMLElement).style.filter = 'none';
            (subEl as HTMLElement).style.opacity = '1';
          });
        });
      });
    });

    return () => {
      bulletItems.forEach((item) => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return null;
}
