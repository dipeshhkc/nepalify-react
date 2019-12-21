//there are total 95 characters generating keys i.e (fired by keypress event) 32 to 126

let unicode = [
  '\u0020', // SPACE
  '\u0021', // ! -> !
  '\u0022', // " -> "
  '\u0023', // # -> #
  '\u0024', // $ -> $
  '\u0025', // % -> %
  '\u0026', // & -> &
  '\u0027', // ' -> '
  '\u0028', // ( -> (
  '\u0029', // ) -> )
  '\u002A', // * -> *
  '\u200C', // + -> ZWNJ
  '\u002C', // , -> ,
  '\u002D', // - -> -
  '\u0964', // . -> ।
  '\u094D', // / -> ्

  '\u0966', // 0 -> ०
  '\u0967', // 1 -> १
  '\u0968', // 2 -> २
  '\u0969', // 3 -> ३
  '\u096A', // 4 -> ४
  '\u096B', // 5 -> ५
  '\u096C', // 6 -> ६
  '\u096D', // 7 -> ७
  '\u096E', // 8 -> ८
  '\u096F', // 9 -> ९

  '\u003B', // ; -> ;
  '\u003A', // : -> :
  '\u0919', // < -> ङ
  '\u200D', // = -> ZWJ
  '\u0965', // > -> ॥
  '\u003F', // ? -> ?
  '\u0040', // @ -> @

  '\u0906', // A -> आ 65
  '\u092D', // B -> भ
  '\u091A', // C -> च
  '\u0927', // D -> ध
  '\u0948', // E -> ै
  '\u090A', // F -> ऊ
  '\u0918', // G -> घ
  '\u0905', // H -> अ
  '\u0940', // I -> ी
  '\u091D', // J -> झ
  '\u0916', // K -> ख
  '\u0933', // L -> ळ
  '\u0902', // M -> ं
  '\u0923', // N -> ण
  '\u0913', // O -> ओ
  '\u092B', // P -> फ
  '\u0920', // Q -> ठ
  '\u0943', // R -> ृ
  '\u0936', // S -> श
  '\u0925', // T -> थ
  '\u0942', // U -> ू
  '\u0901', // V -> ँ
  '\u0914', // W -> औ
  '\u0922', // X -> ढ
  '\u091E', // Y -> ञ
  '\u090B', // Z -> ऋ 90

  '\u0907', // [ -> इ
  '\u0950', // \ -> ॐ
  '\u090F', // ] -> ए
  '\u005E', // ^ -> ^
  '\u0952', // _ ->"॒"
  '\u093D', // ` -> ऽ

  '\u093E', // a -> ा  97
  '\u092C', // b -> ब
  '\u091B', // c -> छ
  '\u0926', // d -> द
  '\u0947', // e -> े
  '\u0909', // f -> उ
  '\u0917', // g -> ग
  '\u0939', // h -> ह
  '\u093F', // i -> ि
  '\u091C', // j -> ज
  '\u0915', // k -> क
  '\u0932', // l -> ल
  '\u092E', // m -> म
  '\u0928', // n -> न
  '\u094B', // o -> ो
  '\u092A', // p -> प
  '\u091F', // q -> ट
  '\u0930', // r -> र
  '\u0938', // s -> स
  '\u0924', // t -> त
  '\u0941', // u -> ु
  '\u0935', // v -> व
  '\u094C', // w -> ौ
  '\u0921', // x -> ड
  '\u092F', // y -> य
  '\u0937', // z -> ष 122

  '\u0908', // { -> ई
  '\u0903', // | -> ः
  '\u0910', // } -> ऐ
  '\u093C' // ~ -> "़"
];

let preeti = [
  '\u0020', // [space]
  '\u091C' + '\u094D' + '\u091E', // ! -> ज्ञ
  '\u0942', // " -> ू
  '\u0918', // #-> घ
  '\u0926' + '\u094D' + '\u0927', // $-> टु
  '\u091B', // %-> छ
  '\u0920', // &-> ठ
  '\u0941', // '-> ु
  '\u0922', // (-> ढ
  '\u0923', // )-> ण
  '\u0921', // *-> ड
  '\u200C', // + -> ZWNJ
  '\u093D', // ,-> ऽ
  '\u0914', // --> औ
  '\u0964', // .-> ।
  '\u0930', // /-> र

  '\u0966', // 0-> ०
  '\u0967', // 1-> १
  '\u0968', // 2-> २
  '\u0969', // 3->३
  '\u096A', // 4->४
  '\u096B', // 5->५
  '\u096C', // 6->६
  '\u096D', // 7->७
  '\u096E', // 8->८
  '\u096F', // 9->९

  '\u091F' + '\u094D' + '\u0920', // :->ट्ठ
  '\u0938', // ;->स
  '\u0919', // <->ङ
  '\u200D', // = -> ZWJ
  '\u0936' + '\u094D' + '\u0930', // >->श्र
  '\u0930' + '\u0941', // ?->रु
  '\u0908', // @->ई

  '\u0906', // A->आ
  '\u094C', // B-> ौ
  '\u090B', // C->ऋ
  '\u0919' + '\u094D' + '\u0917', // D -> ङ्ग
  '\u0910', // E->ऐ
  '\u0901', // F-> ँ
  '\u0926' + '\u094D' + '\u0927', // G->द्ध
  '\u091D', // H->झ
  '\u0915' + '\u094D' + '\u0937', // I->क्ष
  '\u094B', // J->ो
  '\u092B', // K->फ
  '\u0940', // L->
  '\u0921' + '\u094D' + '\u0921', // M->ड्ड
  '\u0926' + '\u094D' + '\u092F', // N->द्य
  '\u0907', // O->इ
  '\u090F', // P->ए
  '\u0924' + '\u094D' + '\u0924', // Q->त्त
  '\u0926' + '\u094D' + '\u0935', // R->द्व
  '\u0919' + '\u094D' + '\u0915', // S->ङ्क
  '\u091F' + '\u094D' + '\u091F', // T->ट्ट
  '\u090A', // U->ऊ
  '\u0950', // V-> 🕉
  '\u0921' + '\u094D' + '\u0922',//W -> 
  '\u0939' + '\u094D' + '\u092F', // X->ह्य
  '\u0920' + '\u094D' + '\u0920', // Y->ठ्ठ
  '\u0915' + '\u094D' + '\u0915', // Z->क्क
  '\u0930' + '\u094D', // [->र्
  '\u094D', // \->्
  '\u0947', // ]- े
  '\u091F', // ^->ट
  '\u0913', // _-> ओ
  '\u091E', // `-> ञ
  '\u092C', // a->ब्
  '\u0926', // b->द
  '\u0905', // c->अ
  '\u092E', // d->म
  '\u092D', // e->भ
  '\u093E', // f-> ा
  '\u0928', // g->न
  '\u091C', // h->ज
  '\u0937', // i->ष
  '\u0935', // j->व
  '\u092A', // k->प
  '\u093F', // l-> ि
  '\u0903', // m->:
  '\u0932', // n->ल
  '\u092F', // o->य
  '\u0909', // p->उ
  '\u0924' + '\u094D' + '\u0930', // q->त्र
  '\u091A', // r->च
  '\u0915', // s->क
  '\u0924', // t->त
  '\u0917', // u->ग
  '\u0916', // v->ख
  '\u0927', // w->ध
  '\u0939', // x->ह
  '\u0925', // y->थ
  '\u0936', // z->श
  '\u0943', // {->ृ
  '\u0902', // |->
  '\u0948', // }->ै
  '\u0965' // ~->॥
];

// Return the unicode of the key passed
function mapper(keyCode, array) {
  return array[keyCode - 32];
}

// Wrapper function for the keymap function
window.unicodify = keyCode => {
  return mapper(keyCode, unicode);
};
window.preetify = keyCode => {
  return mapper(keyCode, preeti);
};

export const mappingFunction = {
  unicodify: keyCode => mapper(keyCode, unicode),
  preetify: keyCode => mapper(keyCode, preeti)
}
