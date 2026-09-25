/**
 * Partner logos. Shared by the homepage Partners section and the partner strip on comparison pages.
 */

export interface Partner {
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  {
    name: "Southwest Family Medicine Associates",
    logo: "/images/partners/southwest-family-medicine.png",
  },
  {
    name: "Commonwealth Pain and Spine Clinic",
    logo: "/images/partners/commonwealth-pain-spine-clinic-logo.png",
  },
  {
    name: "MRCT - Brigham and Women's Hospital",
    logo: "/images/partners/MRCT-Logo.png",
  },
  {
    name: "CRIO Certified Partner",
    logo: "/images/partners/crio-certified-partner.png",
  },
];
