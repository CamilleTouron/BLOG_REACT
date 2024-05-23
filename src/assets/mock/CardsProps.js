import laVoieVerteDesGaves from "../images/home/la_voie_verte_des_gaves.jpg";
import leLacDeCastelneau from "../images/home/le_lac_de_castelneau.jpg";
import leLacDuTech from "../images/home/le_lac_du_tech.jpg";
import leLacEstaing from "../images/home/le_lac_estaing.jpg";
import leValonDuSalut from "../images/home/le_valon_du_salut.jpg";
import leLacDeGenosLoudenvielle from "../images/home/le_lac_de_genos_loudenvielle.jpg";
import CardProps from "../../model/Card";
import Comment from "../../model/Comment";

const mockComments = [
    new Comment("Alice", "Beautiful place", "Really enjoyed the scenery and the hike.", new Date()),
    new Comment("Damien", "Great experience", "Perfect for a family outing.", new Date()),
    new Comment("Céline", "Must visit", "Will definitely come back!", new Date())
];

const mockCardData = [
    new CardProps(
        "La voie verte des gaves",
        "La voie verte des Gaves est une voie verte c'est-à-dire à la fois un chemin de randonnée, une piste cyclable et un espace vert. Elle emprunte le tracé de la ligne de Lourdes à Pierrefitte-Nestalas désaffectée, qui a été fermée définitivement en 1993, depuis Lourdes pour aboutir à Soulom.",
        laVoieVerteDesGaves,
        "La voie verte des gaves",
        mockComments,
        "Moderate",
        "Lourdes, France"
    ),
    new CardProps(
        "Le Lac De Castelneau",
        "Une boucle agréable à parcourir jusqu'à Organ en longeant un canal d'irrigation, long de 63 km reliant Lannemezan à Ornézan (Gers). Le retour vers le village de Castelnau-Magnoac se fait par les coteaux. À l'arrivée, une pause s'impose au village.",
        leLacDeCastelneau,
        "Le Lac De Castelneau",
        mockComments,
        "Easy",
        "Castelnau-Magnoac, France"
    ),
    new CardProps(
        "Le Lac Du Tech",
        "Le lac du Tech est un lac de barrage français situé administrativement dans la commune d'Arrens-Marsous dans le département des Hautes-Pyrénées en région Occitanie.",
        leLacDuTech,
        "Le Lac Du Tech",
        mockComments,
        "Moderate",
        "Arrens-Marsous, France"
    ),
    new CardProps(
        "Le Lac Estaing",
        "Le lac d'Estaing ou étang d'Estaing est un lac pyrénéen français situé administrativement dans la commune d'Estaing dans le département des Hautes-Pyrénées en région Occitanie.",
        leLacEstaing,
        "Le Lac Estaing",
        mockComments,
        "Moderate",
        "Estaing, France"
    ),
    new CardProps(
        "Le Valon Du Salut",
        "Le Vallon du Salut est le lieu de rencontre de toutes les populations de Bagnères depuis le 18ème siècle. Locaux, curistes, touristes, de tous âges courent, marchent, discutent ensemble.. Ce lieu chargé d'histoire est un site classé depuis décembre 2007.",
        leValonDuSalut,
        "Le Valon Du Salut",
        mockComments,
        "Easy",
        "Bagnères-de-Bigorre, France"
    ),
    new CardProps(
        "Le lac de Génos-Loudenvielle",
        "Le lac de Génos-Loudenvielle est un lac de barrage français situé sur les communes de Génos et de Loudenvielle dans le département des Hautes-Pyrénées, en région Occitanie. Il se situe dans la vallée du Louron et reçoit comme émissaire la Neste du Louron",
        leLacDeGenosLoudenvielle,
        "Le lac de Génos-Loudenvielle",
        mockComments,
        "Moderate",
        "Génos-Loudenvielle, France"
    )
];

export default mockCardData;
