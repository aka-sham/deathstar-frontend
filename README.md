# Death Star Front - C3PO

The Death Star Frontend project aka C3PO is a VueJS 3 using Vite and Tailwind CSS. Its purpose is to display the probability to save Endor from Death Star by providing a json file containing the countdown and the bounty hunters location.

This project is part of Giskard technical test.

## Getting started

### Prerequisites
- Node v16.17.0
- pnpm 7.11.0

By using [NVM](https://github.com/nvm-sh/nvm) you will be able to install Node v16.17.0. Then install [pnpm](https://pnpm.io/installation).

Finally in the root directory type the following commands in your terminal:

```bash
nvm use
pnpm install
```

### Usage
The Frontend communicates with the Death Star Backend project and you must start it first before using C3PO. You also need to create an *.env* file in the root directory with your Death Star Backend URL:

```bash
VITE_BACKEND_URL=http://127.0.0.1:8000
```

Then launch C3PO and your page will open automatically:
```bash
pnpm dev
```

Drop an *empire.json* like the following one:

```json
{
    "countdown": 8,
    "bounty_hunters": [
        {
            "planet": "Hoth",
            "day": 6
        },
        {
            "planet": "Hoth",
            "day": 7
        },
        {
            "planet": "Hoth",
            "day": 8
        }
    ]
}
```

**Note:** there is 1 example file in the *examples* directory.

## Git branching model and workflow

To work efficiently together with Git, OneFlow has been chosen. See [OneFlow – a Git branching model and workflow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow).

Because this repository is using 2 branches (develop and main), the chosen workflow is the variation with 2 branches with Option #3 to finish a feature branch.
