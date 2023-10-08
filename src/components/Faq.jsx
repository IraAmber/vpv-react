import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import '..//components/styles/Faq.css'

const faqData = [
  {
    question: 'Питання 1: Як це працює?',
    answer: 'Відповідь на перше питання...',
  },
  {
    question: 'Питання 2: Чи є підтримка?',
    answer: 'Відповідь на друге питання...',
  },
  {
    question: 'Питання 3: Чи є підтримка?',
    answer: 'Відповідь на третє питання...',
  },
  {
    question: 'Питання 4: Чи є підтримка?',
    answer: 'Відповідь на четверте питання...',
  },
  // Додайте більше питань і відповідей, якщо потрібно
]

const Faq = () => {
  return (
    <section className="faq">
      <div className="container">
        <h2>FAQ</h2>
        <Accordion allowZeroExpanded>
          {faqData.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>{faq.question}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{faq.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
