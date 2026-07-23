export interface Tender {
  id: string;
  name: string;
  architect: string;
  owner: string;
  addenda: number;
  closingDate: string;
  closingTime: string;
  active: boolean;
  description?: string;
  driveUrl?: string;
}

export const tenders: Tender[] = [
  {
    id: 'mayfield-west-no2',
    name: 'New School Construction Mayfield West No 2 Public School',
    architect: 'Hossack & Associates',
    owner: 'Peel District School Board',
    addenda: 2,
    closingDate: 'August 11, 2026',
    closingTime: '3:00 PM',
    active: true,
    description:
      'New school construction project in the Mayfield West area. Subcontractors must register and agree to Pre-Eng\'s standard terms and conditions to access tender documents.',
    driveUrl: 'https://drive.google.com/drive/folders/1q0EikLK-lE-A1MbG1a5hnsGLYttbaDPX',
  },
];

export const tenderDisclaimers: string[] = [
  'Unless stated otherwise, no material from this website may be copied, reproduced, republished, uploaded, posted, transmitted, framed, commercially exploited or distributed in any way or by any means whatsoever, except that you may download or print copies of the materials for your use in providing construction related services to Pre-Eng Contracting Ltd. provided you maintain all copyright and other proprietary notices.',
  'The information is provided for the sole use of the end-user only. Any abuse of this privilege will result in an immediate account freeze or cancellation.',
  'Pre-Eng Contracting Ltd. shall not be held responsible for any inaccuracies that may occur due to manipulation and/or scaling of these documents.',
  'Interpretation of and coordination of documents is at the sole discretion of the viewer; similarly, any copied documents carry the same disclaimer. It is the responsibility of the user of this information to assess / coordinate / understand the intent for the user\'s own purposes. Pre-Eng Contracting Ltd. will not be responsible for any errors or omissions. Site reviews may be required by specific trades to better understand their scope of work.',
  'In order to view and download, you must agree to these terms. By clicking "I Agree" you acknowledge and accept the terms above.',
];

export function getActiveTenders(): Tender[] {
  return tenders.filter((t) => t.active);
}
