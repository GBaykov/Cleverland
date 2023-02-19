import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { bookSlice } from '../../store/reducers/book-reducer';
import { allBooksSlice } from '../../store/reducers/books-reducer';
import { categoriesSlice } from '../../store/reducers/categories-reducer';
import { FirstLevel, SecondLevel, TermsContainer, TermsHead } from './styled';

interface TermsProps {
  contentView: string;
}

export const Terms = ({ contentView }: TermsProps) => {
  const dispatch = useAppDispatch();
  const { cleanBookError } = bookSlice.actions;
  const { cleanategoryError } = categoriesSlice.actions;
  const { cleanBooksError } = allBooksSlice.actions;

  useEffect(() => {
    dispatch(cleanBookError());
    dispatch(cleanategoryError());
    dispatch(cleanBooksError());
  });

  return (
    <TermsContainer>
      <TermsHead>{contentView === 'terms' ? 'Правила пользования' : 'Договор оферты'}</TermsHead>
      <FirstLevel>
        1. Идейные соображения высшего порядка, а также высокое качество позиционных исследований представляет собой
        интересный эксперимент проверки экспериментов, поражающих по своей масштабности и грандиозности.
        <SecondLevel>
          1.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого
          участника как способного принимать собственные решения касаемо инновационных методов управления процессами.
        </SecondLevel>
        <SecondLevel>
          1.2. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет
          важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики
          лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.
        </SecondLevel>
        <SecondLevel>
          1.3. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую
          экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.
        </SecondLevel>
        <SecondLevel>
          1.4. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа
          политической культуры, будут объединены в целые кластеры себе подобных.{' '}
        </SecondLevel>
      </FirstLevel>
      <FirstLevel>
        2. С учётом сложившейся международной обстановки, консультация с широким активом предоставляет широкие
        возможности для приоритизации разума над эмоциями.
        <SecondLevel>
          2.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого
          участника как способного принимать собственные решения касаемо инновационных методов управления процессами.{' '}
          <div>
            2.1.1. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет
            важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики
            лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.
          </div>{' '}
          <div>
            2.1.2. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую
            экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.
          </div>{' '}
        </SecondLevel>{' '}
        <SecondLevel>
          {' '}
          2.2. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа
          политической культуры, будут объединены в целые кластеры себе подобных.{' '}
        </SecondLevel>
      </FirstLevel>
      <FirstLevel>
        3. Принимая во внимание показатели успешности, укрепление и развитие внутренней структуры требует от нас анализа
        приоритизации разума над эмоциями.
        <SecondLevel>
          3.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого
          участника как способного принимать собственные решения касаемо инновационных методов управления процессами.
          <div>
            3.1.1. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет
            важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики
            лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.{' '}
          </div>
          <div>
            3.1.2. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую
            экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.
          </div>
        </SecondLevel>
        <SecondLevel>
          3.2. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа
          политической культуры, будут объединены в целые кластеры себе подобных.{' '}
        </SecondLevel>
        <SecondLevel>
          3.3. Не следует, однако, забывать, что экономическая повестка сегодняшнего дня требует анализа анализа
          существующих паттернов поведения.
          <div>
            3.3.1. А ещё представители современных социальных резервов набирают популярность среди определенных слоев
            населения, а значит, должны быть функционально разнесены на независимые элементы.{' '}
            <div>
              3.3.1.1. Стремящиеся вытеснить традиционное производство, нанотехнологии могут быть объявлены нарушающими
              общечеловеческие нормы этики и морали.{' '}
            </div>
            <div>
              3.3.1.2. Прежде всего, разбавленное изрядной долей эмпатии, рациональное мышление однозначно фиксирует
              необходимость новых предложений. Являясь всего лишь частью общей картины, независимые государства
              представлены в исключительно положительном свете.
            </div>
          </div>
        </SecondLevel>
        <SecondLevel>
          3.4. Повседневная практика показывает, что убеждённость некоторых оппонентов требует от нас анализа
          распределения внутренних резервов и ресурсов.
        </SecondLevel>
      </FirstLevel>
    </TermsContainer>
  );
};
