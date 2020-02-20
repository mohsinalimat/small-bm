import { _ } from 'frappejs/utils';

export default {
  doctype: 'JournalEntry',
  title: _('Entrada de Diario'),
  formRoute: name => `/edit/JournalEntry/${name}`,
  columns: [
    'date',
    {
      label: 'Entry ID',
      fieldname: 'name',
      fieldtype: 'Data',
      getValue(doc) {
        return doc.name;
      }
    },
    'entryType',
    'referenceNumber'
  ]
};
