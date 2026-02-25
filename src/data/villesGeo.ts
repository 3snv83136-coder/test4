/**
 * Liste des communes du Var (83) et du Val-d'Oise (95)
 * pour pages géo SEO liées aux cas pratiques.
 */

export type DeptSlug = 'var' | 'val-doise';

export interface VilleGeo {
  name: string;
  slug: string;
  department: DeptSlug;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/['']/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const VAR_NAMES = [
  'Toulon', 'Les Adrets-de-l\'Estérel', 'Aiguines', 'Ampus', 'Les Arcs', 'Artignosc-sur-Verdon', 'Artigues', 'Aups',
  'Bagnols-en-Forêt', 'Bandol', 'Bargème', 'Bargemon', 'Barjols', 'La Bastide', 'Baudinard-sur-Verdon', 'Bauduen',
  'Le Beausset', 'Belgentier', 'Besse-sur-Issole', 'Bormes-les-Mimosas', 'Le Bourguet', 'Bras', 'Brenon', 'Brignoles',
  'Brue-Auriac', 'Cabasse', 'La Cadière-d\'Azur', 'Callas', 'Callian', 'Camps-la-Source', 'Le Cannet-des-Maures', 'Carcès',
  'Carnoules', 'Carqueiranne', 'Le Castellet', 'Cavalaire-sur-Mer', 'La Celle', 'Châteaudouble', 'Châteauvert', 'Châteauvieux',
  'Claviers', 'Cogolin', 'Collobrières', 'Comps-sur-Artuby', 'Correns', 'Cotignac', 'La Crau', 'La Croix-Valmer',
  'Cuers', 'Draguignan', 'Entrecasteaux', 'Esparron-de-Pallières', 'Évenos', 'La Farlède', 'Fayence', 'Figanières',
  'Flassans-sur-Issole', 'Flayosc', 'Forcalqueiret', 'Fox-Amphoux', 'Fréjus', 'La Garde', 'La Garde-Freinet', 'Garéoult',
  'Gassin', 'Ginasservis', 'Gonfaron', 'Grimaud', 'Hyères', 'Le Lavandou', 'La Londe-les-Maures', 'Lorgues',
  'Le Luc', 'La Martre', 'Les Mayons', 'Mazaugues', 'Méounes-lès-Montrieux', 'Moissac-Bellevue', 'La Môle', 'Mons',
  'Montauroux', 'Montferrat', 'Montfort-sur-Argens', 'Montmeyan', 'La Motte', 'Le Muy', 'Nans-les-Pins', 'Néoules',
  'Ollières', 'Ollioules', 'Pierrefeu-du-Var', 'Pignans', 'Plan-d\'Aups-Sainte-Baume', 'Le Plan-de-la-Tour', 'Pontevès',
  'Pourcieux', 'Pourrières', 'Le Pradet', 'Puget-sur-Argens', 'Puget-Ville', 'Ramatuelle', 'Rayol-Canadel-sur-Mer', 'Régusse',
  'Le Revest-les-Eaux', 'Rians', 'Riboux', 'Rocbaron', 'La Roque-Esclapon', 'Roquebrune-sur-Argens', 'La Roquebrussanne', 'Rougiers',
  'Saint-Antonin-du-Var', 'Saint-Cyr-sur-Mer', 'Saint-Julien', 'Saint-Mandrier-sur-Mer', 'Saint-Martin-de-Pallières', 'Saint-Maximin-la-Sainte-Baume', 'Saint-Paul-en-Forêt', 'Saint-Raphaël',
  'Saint-Tropez', 'Saint-Zacharie', 'Sainte-Anastasie-sur-Issole', 'Sainte-Maxime', 'Salernes', 'Les Salles-sur-Verdon', 'Sanary-sur-Mer', 'Seillans',
  'Seillons-Source-d\'Argens', 'La Seyne-sur-Mer', 'Signes', 'Sillans-la-Cascade', 'Six-Fours-les-Plages', 'Solliès-Pont', 'Solliès-Toucas', 'Solliès-Ville',
  'Tanneron', 'Taradeau', 'Tavernes', 'Le Thoronet', 'Tourrettes', 'Tourtour', 'Tourves', 'Trans-en-Provence',
  'Trigance', 'Le Val', 'La Valette-du-Var', 'Varages', 'La Verdière', 'Vérignon', 'Vidauban', 'Villecroze',
  'Vinon-sur-Verdon', 'Vins-sur-Caramy',
];

const VAL_DOISE_NAMES = [
  'Pontoise', 'Ableiges', 'Aincourt', 'Ambleville', 'Amenucourt', 'Andilly', 'Argenteuil', 'Arnouville', 'Arronville', 'Arthies',
  'Asnières-sur-Oise', 'Attainville', 'Auvers-sur-Oise', 'Avernes', 'Baillet-en-France', 'Banthelu', 'Beauchamp', 'Beaumont-sur-Oise', 'Le Bellay-en-Vexin', 'Bellefontaine',
  'Belloy-en-France', 'Bernes-sur-Oise', 'Berville', 'Bessancourt', 'Béthemont-la-Forêt', 'Bezons', 'Boisemont', 'Boissy-l\'Aillerie', 'Bonneuil-en-France', 'Bouffémont',
  'Bouqueval', 'Bray-et-Lû', 'Bréançon', 'Brignancourt', 'Bruyères-sur-Oise', 'Buhy', 'Butry-sur-Oise', 'Cergy', 'Champagne-sur-Oise', 'La Chapelle-en-Vexin',
  'Charmont', 'Chars', 'Châtenay-en-France', 'Chaumontel', 'Chaussy', 'Chauvry', 'Chennevières-lès-Louvres', 'Chérence', 'Cléry-en-Vexin', 'Commeny',
  'Condécourt', 'Cormeilles-en-Parisis', 'Cormeilles-en-Vexin', 'Courcelles-sur-Viosne', 'Courdimanche', 'Deuil-la-Barre', 'Domont', 'Eaubonne', 'Écouen', 'Enghien-les-Bains',
  'Ennery', 'Épiais-lès-Louvres', 'Épiais-Rhus', 'Épinay-Champlâtreux', 'Éragny-sur-Oise', 'Ermont', 'Ézanville', 'Fontenay-en-Parisis', 'Fosses', 'Franconville',
  'Frémainville', 'Frémécourt', 'Frépillon', 'La Frette-sur-Seine', 'Frouville', 'Garges-lès-Gonesse', 'Genainville', 'Génicourt', 'Gonesse', 'Goussainville',
  'Grisy-les-Plâtres', 'Groslay', 'Guiry-en-Vexin', 'Haravilliers', 'Haute-Isle', 'Le Heaulme', 'Hédouville', 'Herblay-sur-Seine', 'Hérouville-en-Vexin', 'Hodent',
  'L\'Isle-Adam', 'Jagny-sous-Bois', 'Jouy-le-Moutier', 'Labbeville', 'Lassy', 'Livilliers', 'Longuesse', 'Louvres', 'Luzarches', 'Maffliers',
  'Magny-en-Vexin', 'Mareil-en-France', 'Margency', 'Marines', 'Marly-la-Ville', 'Maudétour-en-Vexin', 'Menouville', 'Menucourt', 'Mériel', 'Méry-sur-Oise',
  'Le Mesnil-Aubry', 'Moisselles', 'Montgeroult', 'Montigny-lès-Cormeilles', 'Montlignon', 'Montmagny', 'Montmorency', 'Montreuil-sur-Epte', 'Montsoult', 'Mours',
  'Moussy', 'Nerville-la-Forêt', 'Nesles-la-Vallée', 'Neuilly-en-Vexin', 'Neuville-sur-Oise', 'Nointel', 'Noisy-sur-Oise', 'Nucourt', 'Omerville', 'Osny',
  'Parmain', 'Le Perchay', 'Persan', 'Pierrelaye', 'Piscop', 'Le Plessis-Bouchard', 'Le Plessis-Gassot', 'Le Plessis-Luzarches', 'Presles', 'Puiseux-en-France',
  'Puiseux-Pontoise', 'La Roche-Guyon', 'Roissy-en-France', 'Ronquerolles', 'Sagy', 'Saint-Brice-sous-Forêt', 'Saint-Clair-sur-Epte', 'Saint-Cyr-en-Arthies', 'Saint-Gervais', 'Saint-Gratien',
  'Saint-Leu-la-Forêt', 'Saint-Martin-du-Tertre', 'Saint-Ouen-l\'Aumône', 'Saint-Prix', 'Saint-Witz', 'Sannois', 'Santeuil', 'Sarcelles', 'Seraincourt', 'Seugy',
  'Soisy-sous-Montmorency', 'Survilliers', 'Taverny', 'Théméricourt', 'Theuville', 'Le Thillay', 'Us', 'Vallangoujard', 'Valmondois', 'Vaudherland',
  'Vauréal', 'Vémars', 'Vétheuil', 'Viarmes', 'Vienne-en-Arthies', 'Vigny', 'Villaines-sous-Bois', 'Villeron', 'Villers-en-Arthies', 'Villiers-Adam',
  'Villiers-le-Bel', 'Villiers-le-Sec', 'Wy-dit-Joli-Village',
];

function buildVilles(): VilleGeo[] {
  const varVilles: VilleGeo[] = VAR_NAMES.map((name) => ({
    name,
    slug: slugify(name),
    department: 'var',
  }));
  const valDoiseVilles: VilleGeo[] = VAL_DOISE_NAMES.map((name) => ({
    name,
    slug: slugify(name),
    department: 'val-doise',
  }));
  return [...varVilles, ...valDoiseVilles];
}

export const VILLES_GEO = buildVilles();

export function getVilleBySlug(department: DeptSlug, slug: string): VilleGeo | undefined {
  return VILLES_GEO.find((v) => v.department === department && v.slug === slug);
}

export function getVillesByDepartment(department: DeptSlug): VilleGeo[] {
  return VILLES_GEO.filter((v) => v.department === department).sort((a, b) => a.name.localeCompare(b.name));
}

export function getDepartmentLabel(dept: DeptSlug): string {
  return dept === 'var' ? 'Var (83)' : 'Val-d\'Oise (95)';
}
