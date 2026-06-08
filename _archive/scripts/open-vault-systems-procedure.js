module.exports = async (params) => {
  const { app } = params;
  const file = app.vault.getAbstractFileByPath("_docs/Vault Systems — Complete Procedure.md");
  if (file) {
    await app.workspace.getLeaf(false).openFile(file);
  }
};
