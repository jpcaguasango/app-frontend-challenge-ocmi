"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

interface IProps {
  children: React.ReactNode;
  path: string;
}

const ActiveLink = ({ children, path }: IProps) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.link} ${pathName === path && styles.activeLink}`}
      href={path}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
