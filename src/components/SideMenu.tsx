import { FC, useEffect, useState } from "react"

interface SideMenuProps {
  items: Array<string>
}

export const SideMenu: FC<SideMenuProps> = ({ items }) => {
  const menuItems = items.map((item) => item.split(' ').join('_'))

  const [isActive, setIsActive] = useState(menuItems[0])

  useEffect(() => {
    const targetSections = document.getElementsByClassName('description-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeElement = entry.target.getAttribute("id") || items[0]
          setIsActive(activeElement);
        }
      });
    }, {threshold: [0.2, 0.7]});

    [...targetSections].forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="side-menu">
      <div className="side-bar"></div>
      <ul >
        {menuItems.map((item, id) => (
          <li key={id} className={item == isActive ? 'active' : ''}> <a href={"#" + item}>{item.split('_').join(' ')}</a></li>
        ))}
      </ul>
    </div >

  )
}