class SelectedWord {

  constructor(target) {
    this.target = target;
    console.log(`target=${target}`);
    let closest_lang_element = target.closest("[lang],[xml:lang]");
    if (closest_lang_element) {
      this.language = closest_lang_element.getAttribute("lang") || closest_lang_element.getAttribute("xml:lang");
    }
  }

};
export default SelectedWord
