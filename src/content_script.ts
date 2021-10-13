main()

function main() {
  const upvotedAnswers = getUpvotedAnswers()

  if (!upvotedAnswers.length) return

  createUpvotedFilter(upvotedAnswers)
}

function getUpvotedAnswers() {
  const upvotedArrows = document.getElementsByClassName(
    'js-vote-up-btn fc-theme-primary'
  )

  const upvotedAnswers = []

  for (let i = 0; i < upvotedArrows.length; i++) {
    const answer = upvotedArrows[i].closest('.answer')
    if (answer) {
      upvotedAnswers.push(answer)
    }
  }

  return upvotedAnswers
}

function createUpvotedFilter(upvotedAnswers: Element[]) {
  const filter = Object.assign(document.createElement('button'), {
    className: 's-btn s-btn__muted s-btn__muted s-btn__outlined',
    innerHTML: `Upvoted (${upvotedAnswers.length})`,
  })

  document.getElementsByClassName('js-filter-btn')[0].append(filter)

  filter.onclick = function () {
    const otherFilters = filter.parentElement?.children

    if (!otherFilters) return

    for (let i = 0; i < otherFilters.length; i++) {
      otherFilters[i].classList.remove('is-selected')
    }

    filter.classList.add('is-selected')

    for (let i = 0; i < upvotedAnswers.length; i++) {
      document.getElementById('answers')?.removeChild(upvotedAnswers[i])
      document.getElementById('answers-header')?.after(upvotedAnswers[i])
    }
  }
}
