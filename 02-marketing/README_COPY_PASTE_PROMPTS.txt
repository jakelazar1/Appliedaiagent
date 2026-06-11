================================================================================
COPY-PASTE PROMPTS FOR CLAUDE: QUICK REFERENCE
================================================================================

You now have three complete, copy-paste-ready prompts for Claude. Each one is
self-contained with all context embedded. Just open the file, copy the entire
contents, and paste into Claude.

---

PROMPT 1: DESIGN BRIEF REVIEW & FEEDBACK
==========================================

FILE LOCATION:
~/Local/appliedaiagent/02-marketing/PROMPT_1_DESIGN_FEEDBACK.txt

PURPOSE:
Get Claude's expert feedback on your design brief before starting Figma work.
Claude will review the brief, identify ambiguities, suggest refinements, and
provide feedback on:
- Verticals showcase architecture
- Visual hierarchy & color palette
- Animation approach
- Responsive design
- Copy tone & AI-isms
- Overall feasibility

WHEN TO USE:
Before you hire a designer or start Figma work yourself. Get Claude's review first.

HOW TO USE:
1. Open the file: ~/Local/appliedaiagent/02-marketing/PROMPT_1_DESIGN_FEEDBACK.txt
2. Copy all contents
3. Paste into Claude (claude.ai or Claude chat)
4. Claude will review and provide feedback
5. Use feedback to refine brief before design phase

---

PROMPT 2: DESIGN REFINEMENT & FIGMA HANDOFF
============================================

FILE LOCATION:
~/Local/appliedaiagent/02-marketing/PROMPT_2_DESIGN_REFINEMENT.txt

PURPOSE:
Get Claude to refine the design and produce a detailed Figma-ready specification
that a designer can execute immediately. Claude will:
- Critique the brief
- Suggest visual enhancements
- Provide component-level Figma specs
- Create design system reference
- Detail each vertical's demo
- Outline phased Figma work plan

WHEN TO USE:
After you've reviewed Prompt 1 feedback and want to refine the design.
This output becomes your Figma handoff document.

HOW TO USE:
1. Open the file: ~/Local/appliedaiagent/02-marketing/PROMPT_2_DESIGN_REFINEMENT.txt
2. Copy all contents
3. Paste into Claude
4. Claude outputs refined specs
5. Save Claude's output as "FIGMA_HANDOFF.md"
6. Share with your designer or use as reference for your own Figma work

---

PROMPT 3: BUILD MY WEBSITE FROM SCRATCH
========================================

FILE LOCATION:
~/Local/appliedaiagent/02-marketing/PROMPT_3_COMPLETE_BUILD.txt

PURPOSE:
Give Claude (via Claude Code or Claude Chat) everything needed to build your
entire website from scratch. Includes:
- Full positioning & context
- All 9 verticals explained
- Design specifications
- Developer brief
- Phased implementation plan (7 phases, 100 hours)
- Critical requirements
- Specific instructions for each phase

WHEN TO USE:
When you're ready to build the website. This is your complete handoff to Claude Code.

HOW TO USE:
1. Open the file: ~/Local/appliedaiagent/02-marketing/PROMPT_3_COMPLETE_BUILD.txt
2. Copy all contents
3. Paste into Claude Code (or Claude Chat if Claude Code isn't available)
4. Tell Claude: "Start with Phase 1: PROJECT SETUP"
5. Claude will build the project incrementally
6. After each phase, review and approve before moving to next phase

---

WORKFLOW RECOMMENDATIONS:
=========================

WORKFLOW A: HIRE A DESIGNER (Recommended if design is critical)
--------------------------------------------------------------
1. Use PROMPT_1 (Design Feedback) → Get Claude's review
2. Use PROMPT_2 (Design Refinement) → Get refined Figma specs
3. Share refined specs with professional designer
4. Designer builds Figma design
5. Export design + components
6. Use PROMPT_3 → Give Claude the Figma design to translate to code

WORKFLOW B: BUILD YOURSELF WITH CLAUDE CODE (Fastest path)
-----------------------------------------------------------
1. Use PROMPT_1 (Design Feedback) → Get Claude's review (optional, speeds up feedback)
2. Use PROMPT_3 (Complete Build) → Paste into Claude Code
3. Claude builds entire website (7 phases)
4. You review each phase before moving to next
5. Deploy to Vercel when complete

WORKFLOW C: HYBRID (Design-First, Code-Second)
-----------------------------------------------
1. Use PROMPT_1 (Design Feedback) → Get Claude's review
2. Use PROMPT_2 (Design Refinement) → Get detailed specs
3. Spend 1-2 days in Figma (or pay designer to do it)
4. Take Figma design + design system
5. Use PROMPT_3 → Give Claude the Figma file + prompt
6. Claude implements based on Figma design

---

ESTIMATED TIME:
================

PROMPT 1 (Design Feedback):     15-30 minutes (Claude review)
PROMPT 2 (Design Refinement):   45-90 minutes (Claude outputs refined specs)
PROMPT 3 (Build Website):        100+ hours of Claude Code work
                                 (phased, ~20-30 hours per phase)
                                 Human review: 30 minutes per phase

---

QUICK START:
=============

RIGHT NOW, I RECOMMEND:

1. Start with PROMPT_1 (Design Feedback)
   - Open: ~/Local/appliedaiagent/02-marketing/PROMPT_1_DESIGN_FEEDBACK.txt
   - Copy all contents
   - Paste into Claude
   - Get feedback

2. Once you review Claude's feedback, decide:
   - Do you want to refine design further? Use PROMPT_2
   - Are you ready to build? Use PROMPT_3

3. If using PROMPT_3:
   - Copy entire contents
   - Paste into Claude Code
   - Start Phase 1 (project setup)
   - Build incrementally

---

FILE LOCATIONS (All in one place):
===================================

~/Local/appliedaiagent/02-marketing/

  PROMPT_1_DESIGN_FEEDBACK.txt ........... Design review prompt
  PROMPT_2_DESIGN_REFINEMENT.txt ........ Design handoff prompt
  PROMPT_3_COMPLETE_BUILD.txt ........... Website build prompt

  DESIGN_BRIEF.md ....................... Original design specification
  DEVELOPER_BRIEF.md .................... Original developer specification
  BRIEFS_SUMMARY.txt .................... Overview of briefs

  (Also mirrored in ~/.hermes/wiki/topics/businesses/applied-ai-agent/)

---

QUESTIONS?
===========

Before pasting into Claude, you can:
- Review the prompt file to see exactly what Claude will receive
- Modify any prompt text if you want to adjust the approach
- Ask me clarifying questions before pasting

Ready to start? Which workflow appeals to you most?
A) Hire a designer (use Prompts 1 → 2 → find designer → share specs)
B) Build with Claude Code (use Prompt 3 → build immediately)
C) Hybrid (use Prompts 1 → 2 → design in Figma → use Prompt 3)

Let me know and we can refine any of these prompts before you paste them.
