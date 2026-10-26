/**
 * Partner logos. Shared by the homepage Partners section and the partner strip on comparison pages.
 */

export interface Partner {
  name: string;
  logo: string;
  /** Size at the largest display height (80px), in the file's aspect ratio: the image reserves its real shape before
   * it loads, and next/image's srcset stays sized for an 80px-tall logo */
  width: number;
  height: number;
}

export const partners: Partner[] = [
  {
    name: "Southwest Family Medicine Associates",
    logo: "/images/partners/southwest-family-medicine.png",
    width: 353,
    height: 80,
  },
  {
    name: "Commonwealth Pain and Spine Clinic",
    logo: "/images/partners/commonwealth-pain-spine-clinic-logo.png",
    width: 218,
    height: 80,
  },
  {
    name: "MRCT - Brigham and Women's Hospital",
    logo: "/images/partners/MRCT-Logo.png",
    width: 175,
    height: 80,
  },
  {
    name: "CRIO Certified Partner",
    logo: "/images/partners/crio-certified-partner.png",
    width: 83,
    height: 80,
  },
];
