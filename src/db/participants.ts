export const participants = {
  parameters: {
    step: 'Ход',
    name: 'Параметры и требования',
    manufacturing_quality_measures:
      'Наличие комтплекса мероприятий, повышающих стандарты изготовления',
    prodaction_time: 'Срок изготовления лота, дней',
    warranty_obligations: 'Гарантийные обязательства, мес',
    payment_terms: 'Условия оплаты',
    manufacturing_cost: 'Стоимость изготовления лота, руб. (без НДС)',
    action: 'Действия:',
  },
  values: [
    {
      name: 'участник 1',
      manufacturing_quality_measures: '-',
      prodaction_time: '80',
      warranty_obligations: '24',
      payment_terms: '30%',
      manufacturing_cost: {
        before: '37000000 руб.',
        minus: '-25000 руб.',
        total: '2475000 руб.',
      },
      action: '',
    },
    {
      name: 'участник 2',
      manufacturing_quality_measures: '-',
      prodaction_time: '90',
      warranty_obligations: '24',
      payment_terms: '100%',
      manufacturing_cost: {
        before: '32000000 руб.',
        minus: '-25000 руб.',
        total: '2475000 руб.',
      },
      action: '',
    },
    {
      name: 'участник 3',
      manufacturing_quality_measures: '-',
      prodaction_time: '75',
      warranty_obligations: '22',
      payment_terms: '60%',
      manufacturing_cost: {
        before: '28000000 руб.',
        minus: '-25000 руб.',
        total: '2475000 руб.',
      },
      action: '',
    },
    {
      step: true,
      name: 'участник 4',
      manufacturing_quality_measures: '-',
      prodaction_time: '120',
      warranty_obligations: '36',
      payment_terms: '50%',
      manufacturing_cost: {
        before: '25000000 руб.',
        minus: '-25000 руб.',
        total: '2475000 руб.',
      },
      action: '',
    },
  ],
}
