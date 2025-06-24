# 🤖 Automation Setup

This repository includes comprehensive automation for dependency management, security, and quality assurance.

## 📋 Workflows Overview

### 1. **Dependabot Configuration** (`.github/dependabot.yml`)

- **Schedule**: Weekly (Mondays at 9:00 AM UTC)
- **Purpose**: Automated dependency updates
- **Features**: Groups related packages, handles security updates

### 2. **Security Audit** (`.github/workflows/security-audit.yml`)

- **Schedule**: Weekly (Mondays at 9:00 AM UTC) + on push/PR
- **Purpose**: Vulnerability scanning and automatic fixes
- **Features**: Creates PRs for security fixes, uploads audit results

### 3. **Dependency Updates** (`.github/workflows/update-dependencies.yml`)

- **Schedule**: Weekly (Sundays at 6:00 AM UTC) + manual trigger
- **Purpose**: Comprehensive package updates with testing
- **Features**: Tests builds after updates, creates detailed PR summaries

### 4. **Continuous Integration** (`.github/workflows/ci.yml`)

- **Triggers**: Every push and PR to main/develop
- **Purpose**: Quality assurance and testing
- **Features**: Linting, security scans, build verification, performance checks

### 5. **Auto-merge Dependabot** (`.github/workflows/auto-merge-dependabot.yml`)

- **Triggers**: Dependabot PRs
- **Purpose**: Automatically merge safe updates
- **Features**: Auto-merges patch/minor/security updates, flags major updates

## 🔄 Automation Schedule

| Day        | Time (UTC) | Action                              |
| ---------- | ---------- | ----------------------------------- |
| Sunday     | 6:00 AM    | Dependency updates check            |
| Monday     | 9:00 AM    | Security audit + Dependabot updates |
| Continuous | -          | CI checks on all PRs/pushes         |

## 🛡️ Security Features

- **Vulnerability Scanning**: Regular npm audit checks
- **Automatic Fixes**: Security vulnerabilities fixed automatically
- **High/Critical Blocking**: Prevents merging with serious vulnerabilities
- **Dependency Monitoring**: Weekly checks for outdated packages

## ⚡ Auto-merge Rules

**Will Auto-merge:**

- Patch updates (e.g., 1.0.1 → 1.0.2)
- Minor updates (e.g., 1.0.0 → 1.1.0)
- Security updates
- Only after all CI checks pass

**Requires Manual Review:**

- Major updates (e.g., 1.0.0 → 2.0.0)
- Updates that fail CI checks
- Any update flagged as potentially breaking

## 🎯 Quality Checks

Every PR includes:

- ✅ ESLint and TypeScript checks
- ✅ Build verification
- ✅ Security vulnerability scanning
- ✅ Bundle size monitoring
- ✅ Accessibility testing
- ✅ Dependency analysis

## 🔧 Manual Controls

**Trigger Updates Manually:**

```bash
# Go to Actions tab → Update Dependencies → Run workflow
# Choose update type: patch, minor, major, or all
```

**Disable Auto-merge:**

```bash
# Comment on Dependabot PR:
@dependabot cancel merge
```

**Emergency Security Fix:**

```bash
# Go to Actions tab → Security Audit → Run workflow
```

## 📊 Monitoring

Check these regularly:

- **Actions tab**: Workflow runs and results
- **Security tab**: Vulnerability alerts
- **Pull requests**: Automated updates
- **Dependabot tab**: Dependency insights

## 🚀 Benefits

1. **Reduced Manual Work**: Automated updates and merging
2. **Enhanced Security**: Regular vulnerability scanning
3. **Quality Assurance**: All changes tested before merge
4. **Transparency**: Clear documentation of all changes
5. **Safety**: Major changes still require human oversight
