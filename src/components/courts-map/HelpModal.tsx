'use client';

import React from 'react';
import { X, MousePointer, Search as SearchIcon, Map, Moon } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border-2 border-primary rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-primary text-primary-foreground px-6 py-4 flex justify-between items-center sticky top-0">
          <h2 className="text-2xl font-bold">Guide d'utilisation</h2>
          <button
            onClick={onClose}
            className="hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <section>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Map className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Utilisation de la carte</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground ml-14">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Survolez une wilaya pour voir l'effet visuel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Cliquez sur une wilaya pour afficher les informations du tribunal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Le panneau d'informations s'affichera sur le côté droit</span>
              </li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <SearchIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Recherche et filtrage</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground ml-14">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Utilisez la barre de recherche en haut pour rechercher un tribunal ou une wilaya</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Les résultats apparaissent automatiquement pendant la saisie</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Cliquez sur un résultat pour accéder directement au tribunal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Vous pouvez rechercher par nom de wilaya, de cour ou de tribunal</span>
              </li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <MousePointer className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Affichage des détails</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground ml-14">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Lors de la sélection d'un tribunal, les coordonnées complètes s'affichent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Téléphone, email, adresse, jours de réception</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Lien vers le site officiel du tribunal (si disponible)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Cliquez sur "Tribunaux rattachés" pour voir la liste des tribunaux</span>
              </li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Moon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Mode sombre</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground ml-14">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Cliquez sur l'icône lune/soleil en haut pour basculer entre les modes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Toutes les couleurs s'adaptent automatiquement au mode sélectionné</span>
              </li>
            </ul>
          </section>

          <div className="border-t-2 border-border pt-6 mt-6">
            <h3 className="text-lg font-bold mb-3">Informations supplémentaires</h3>
            <div className="bg-secondary p-4 rounded-xl space-y-2 text-sm">
              <p>
                <strong>Email :</strong> Cliquez sur une adresse email pour ouvrir votre client de messagerie
              </p>
              <p>
                <strong>Sites officiels :</strong> Cliquez sur le lien pour accéder au site officiel du tribunal
              </p>
              <p>
                <strong>Appareils mobiles :</strong> L'interface est entièrement responsive et fonctionne sur tous les appareils
              </p>
            </div>
          </div>
        </div>

        <div className="bg-secondary px-6 py-4 border-t border-border">
          <button
            onClick={onClose}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors font-bold"
          >
            Compris, merci
          </button>
        </div>
      </div>
    </div>
  );
}
